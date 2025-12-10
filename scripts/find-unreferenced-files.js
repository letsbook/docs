#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = path.join(__dirname, '../docs');
const ALLOWED_EXTENSIONS = ['.md', '.mdx', '.json'];
const SKIP_FILES = ['.DS_Store'];

/**
 * Recursively get all files in a directory
 */
function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getAllFiles(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    });

    return fileList;
}

/**
 * Check if a file is referenced in any markdown content
 */
function isFileReferenced(fileName, markdownContents) {
    // Try multiple reference formats
    const patterns = [
        fileName, // exact filename
        path.basename(fileName), // just the basename
        fileName.replace(/\\/g, '/'), // forward slashes
        encodeURIComponent(fileName), // URL encoded
        encodeURIComponent(path.basename(fileName)), // URL encoded basename
    ];

    return markdownContents.some((content) =>
        patterns.some((pattern) => content.includes(pattern))
    );
}

async function main() {
    console.log('Scanning /docs for unreferenced files...\n');

    // Get all files in docs directory
    const allFiles = getAllFiles(DOCS_DIR);

    // Split files into markdown and non-markdown
    const markdownFiles = allFiles.filter((file) => {
        const ext = path.extname(file);
        return ext === '.md' || ext === '.mdx';
    });

    const otherFiles = allFiles.filter((file) => {
        const ext = path.extname(file);
        const basename = path.basename(file);
        return (
            !ALLOWED_EXTENSIONS.includes(ext) && !SKIP_FILES.includes(basename)
        );
    });

    console.log(`Found ${markdownFiles.length} markdown files`);
    console.log(`Found ${otherFiles.length} files with other extensions\n`);

    if (otherFiles.length === 0) {
        console.log('✓ No non-markdown/json files found in /docs');
        return;
    }

    // Read all markdown content
    const markdownContents = markdownFiles.map((file) =>
        fs.readFileSync(file, 'utf-8')
    );

    // Find unreferenced files
    const unreferencedFiles = [];

    otherFiles.forEach((file) => {
        // Get relative path from docs directory for easier matching
        const relativePath = path.relative(DOCS_DIR, file);

        if (!isFileReferenced(relativePath, markdownContents)) {
            unreferencedFiles.push(relativePath);
        }
    });

    // Output results
    if (unreferencedFiles.length === 0) {
        console.log('✓ All files are referenced in markdown files');
        return;
    }

    console.log(`Found ${unreferencedFiles.length} unreferenced files:\n`);
    unreferencedFiles.forEach((file) => {
        console.log(`  - ${file}`);
    });

    // Prompt to delete
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('\nDo you want to delete these files? (yes/no): ', (answer) => {
        rl.close();

        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
            console.log('\nDeleting files...\n');
            let deletedCount = 0;

            unreferencedFiles.forEach((file) => {
                const fullPath = path.join(DOCS_DIR, file);
                try {
                    fs.unlinkSync(fullPath);
                    console.log(`✓ Deleted: ${file}`);
                    deletedCount++;
                } catch (error) {
                    console.error(
                        `✗ Failed to delete ${file}: ${error.message}`
                    );
                }
            });

            console.log(
                `\nDeleted ${deletedCount} of ${unreferencedFiles.length} files.`
            );
        } else {
            console.log('\nNo files were deleted.');
        }
    });
}

main().catch((error) => {
    console.error('Error:', error);
    process.exit(1);
});
