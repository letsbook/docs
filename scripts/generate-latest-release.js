const fs = require('fs');
const path = require('path');

/**
 * Parses frontmatter from a markdown/mdx file
 * @param {string} content - File content
 * @returns {object} Parsed frontmatter object
 */
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);

    if (!match) {
        return null;
    }

    const frontmatterText = match[1];
    const frontmatter = {};

    // Parse YAML-style frontmatter
    frontmatterText.split('\n').forEach((line) => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim();
            const value = line.substring(colonIndex + 1).trim();
            frontmatter[key] = value;
        }
    });

    return frontmatter;
}

/**
 * Gets all release files and their metadata
 * @returns {Array} Array of release metadata objects
 */
function getReleases() {
    const releasesDir = path.join(__dirname, '..', 'releases');
    const files = fs.readdirSync(releasesDir);

    const releases = files
        .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
        .map((file) => {
            const filePath = path.join(releasesDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const frontmatter = parseFrontmatter(content);

            if (!frontmatter) {
                return null;
            }

            return {
                version: frontmatter.releaseVersion || frontmatter.slug,
                description: frontmatter.description,
                date: new Date(frontmatter.date),
                slug: frontmatter.slug,
            };
        })
        .filter(Boolean);

    return releases;
}

/**
 * Main function to generate latest-release.json
 */
function generateLatestRelease() {
    try {
        const releases = getReleases();

        if (releases.length === 0) {
            console.error('No releases found');
            process.exit(1);
        }

        // Sort by date (most recent first)
        releases.sort((a, b) => b.date - a.date);

        const latestRelease = releases[0];

        const output = {
            version: latestRelease.version,
            description: latestRelease.description,
            url: `/releases/${latestRelease.slug}`,
        };

        const outputPath = path.join(
            __dirname,
            '..',
            'src',
            'data',
            'latest-release.json'
        );

        fs.writeFileSync(outputPath, JSON.stringify(output, null, 2) + '\n');

        console.log(
            `✅ Generated latest-release.json: ${latestRelease.version}`
        );
    } catch (error) {
        console.error('Error generating latest-release.json:', error);
        process.exit(1);
    }
}

generateLatestRelease();
