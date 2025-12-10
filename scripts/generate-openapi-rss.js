import { existsSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @typedef {Object} ChangelogEntry
 * @property {string} date - The date of the changelog entry (YYYY-MM-DD)
 * @property {string[]} changes - List of changes for this entry
 */

/**
 * @typedef {Object} RssItem
 * @property {string} title - The title of the RSS item
 * @property {string} link - The link to the changelog
 * @property {string} description - HTML description of changes
 * @property {string} pubDate - RFC 2822 formatted date
 * @property {string} guid - Unique identifier for the item
 */

/**
 * Extracts the changelog section from the OpenAPI description
 * @param {string} yamlContent - The raw YAML file content
 * @returns {string|null} The changelog markdown section or null if not found
 */
function extractChangelog(yamlContent) {
    // Find the description field in the info section
    // Handles both literal (|) and folded (>) block scalars
    const descriptionMatch = yamlContent.match(
        /info:\s*\n\s*title:[^\n]*\n\s*description:\s*[|>]\s*\n([\s\S]*?)\n\s*version:/
    );

    if (!descriptionMatch) {
        return null;
    }

    const description = descriptionMatch[1];

    // Extract the changelog section (from # Changelog to next # heading)
    // The # Introduction heading may appear with varying whitespace
    const changelogMatch = description.match(
        /# Changelog\s*([\s\S]*?)(?=\s*# Introduction|$)/
    );

    if (!changelogMatch) {
        return null;
    }

    return changelogMatch[1].trim();
}

/**
 * Parses the changelog markdown into structured entries
 * @param {string} changelogMarkdown - The changelog markdown content
 * @returns {ChangelogEntry[]} Array of parsed changelog entries
 */
function parseChangelog(changelogMarkdown) {
    /** @type {ChangelogEntry[]} */
    const entries = [];

    // Split by date headers (## YYYY-MM-DD)
    const dateRegex = /##\s*(\d{4}-\d{2}-\d{2})/g;
    const sections = changelogMarkdown.split(dateRegex);

    // First element is empty or whitespace, then alternating: date, content, date, content...
    for (let i = 1; i < sections.length; i += 2) {
        const date = sections[i];
        const content = sections[i + 1] || '';

        // Extract bullet points, handling multi-line items (from folded YAML)
        // Lines that don't start with - are continuations of the previous bullet
        const lines = content.split('\n').map((line) => line.trim());
        /** @type {string[]} */
        const changes = [];
        let currentChange = '';

        for (const line of lines) {
            if (line.startsWith('-')) {
                // Save previous change if exists
                if (currentChange) {
                    changes.push(currentChange);
                }
                // Start new change (remove the leading dash)
                currentChange = line.substring(1).trim();
            } else if (line && currentChange) {
                // Continuation line - append to current change
                currentChange += ' ' + line;
            }
        }
        // Don't forget the last change
        if (currentChange) {
            changes.push(currentChange);
        }

        if (changes.length > 0) {
            entries.push({ date, changes });
        }
    }

    return entries;
}

/**
 * Converts a changelog entry to an RSS item
 * @param {ChangelogEntry} entry - The changelog entry
 * @param {string} baseUrl - The base URL for links
 * @returns {RssItem} The RSS item
 */
function entryToRssItem(entry, baseUrl) {
    const dateObj = new Date(entry.date + 'T12:00:00Z');
    const description = entry.changes
        .map((change) => `<li>${escapeXml(change)}</li>`)
        .join('\n');

    return {
        title: `API Changelog - ${entry.date}`,
        link: `${baseUrl}/api/#section/Changelog`,
        description: `<ul>\n${description}\n</ul>`,
        pubDate: dateObj.toUTCString(),
        guid: `${baseUrl}/api/changelog/${entry.date}`,
    };
}

/**
 * Escapes special XML characters
 * @param {string} str - The string to escape
 * @returns {string} The escaped string
 */
function escapeXml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

/**
 * Generates the RSS XML from items
 * @param {RssItem[]} items - Array of RSS items
 * @param {string} baseUrl - The base URL for the feed
 * @returns {string} The complete RSS XML
 */
function generateRssXml(items, baseUrl) {
    const itemsXml = items
        .map(
            (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="false">${item.guid}</guid>
    </item>`
        )
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Let's Book API Changelog</title>
    <link>${baseUrl}/api/</link>
    <description>Updates and changes to the Let's Book API</description>
    <language>en</language>
    <atom:link href="${baseUrl}/api/changelog.rss" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>
`;
}

/**
 * Main function to generate the RSS feed from the OpenAPI changelog
 */
function generateOpenApiRss() {
    const baseUrl = 'https://support.letsbook.app';
    const inputPath = join(__dirname, '..', 'build', 'api.yaml');
    const outputPath = join(__dirname, '..', 'build', 'api', 'changelog.rss');

    try {
        // Check if input file exists
        if (!existsSync(inputPath)) {
            console.error(`❌ Input file not found: ${inputPath}`);
            console.error(
                'Make sure to run this script after the build process.'
            );
            process.exit(1);
        }

        const yamlContent = readFileSync(inputPath, 'utf8');

        const changelogMarkdown = extractChangelog(yamlContent);
        if (!changelogMarkdown) {
            console.error('❌ Could not find changelog in OpenAPI description');
            process.exit(1);
        }

        const entries = parseChangelog(changelogMarkdown);
        if (entries.length === 0) {
            console.error('❌ No changelog entries found');
            process.exit(1);
        }

        const rssItems = entries.map((entry) => entryToRssItem(entry, baseUrl));
        const rssXml = generateRssXml(rssItems, baseUrl);

        writeFileSync(outputPath, rssXml);

        console.log(
            `✅ Generated api/changelog.rss with ${entries.length} entries`
        );
    } catch (error) {
        console.error('Error generating OpenAPI RSS feed:', error);
        process.exit(1);
    }
}

generateOpenApiRss();
