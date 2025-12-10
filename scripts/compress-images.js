#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, '..');
const DOCS_DIR = path.join(PROJECT_ROOT, 'docs');
const RELEASES_DIR = path.join(PROJECT_ROOT, 'releases');

const TARGET_DIRS = [DOCS_DIR, RELEASES_DIR];
const COMPRESSION_MARKER = 'letsbook-compressed';
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

/**
* Check if an image has already been compressed by
our script
*/
async function isAlreadyCompressed(filePath) {
    try {
        const metadata = await sharp(filePath).metadata();
        return (
            metadata.exif &&
            metadata.exif.toString().includes(COMPRESSION_MARKER)
        );
    } catch (error) {
        return false;
    }
}

/**
 * Find all image files in the docs directory
 */
function findImageFiles(dir) {
    let imageFiles = [];

    const entries = fs.readdirSync(dir, {
        withFileTypes: true,
    });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            imageFiles = imageFiles.concat(findImageFiles(fullPath));
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (IMAGE_EXTENSIONS.includes(ext)) {
                imageFiles.push(fullPath);
            }
        }
    }

    return imageFiles;
}

/**
 * Compress an image file
 */
async function compressImage(filePath, rootDir) {
    const dir = path.dirname(filePath);
    const ext = path.extname(filePath);
    const basename = path.basename(filePath, ext);
    const tempOutput = path.join(dir, `${basename}.temp${ext}`);

    console.log(`  Compressing: \n${path.relative(rootDir, filePath)}`);

    try {
        const originalSize = fs.statSync(filePath).size;

        // Load the image
        let image = sharp(filePath);
        const metadata = await image.metadata();

        // Resize if larger than 1920px width
        if (metadata.width > 1920) {
            image = image.resize(1920, null, {
                withoutEnlargement: true,
                fit: 'inside',
            });
        }

        // Compress based on format
        if (ext.toLowerCase() === '.png') {
            image = image.png({
                quality: 85,
                compressionLevel: 9,
                adaptiveFiltering: true,
            });
        } else if (['.jpg', '.jpeg'].includes(ext.toLowerCase())) {
            image = image.jpeg({
                quality: 85,
                progressive: true,
                mozjpeg: true,
            });
        } else if (ext.toLowerCase() === '.webp') {
            image = image.webp({
                quality: 85,
            });
        }

        // Add metadata marker
        image = image.withMetadata({
            exif: {
                IFD0: {
                    ImageDescription: COMPRESSION_MARKER,
                },
            },
        });

        // Save to temp file
        await image.toFile(tempOutput);

        const compressedSize = fs.statSync(tempOutput).size;

        /* Only replace if the compressed file is strictly smaller */
        if (compressedSize < originalSize) {
            const savings = (
                ((originalSize - compressedSize) / originalSize) *
                100
            ).toFixed(1);

            // Replace original with compressed version
            fs.unlinkSync(filePath);
            fs.renameSync(tempOutput, filePath);

            const originalKB = (originalSize / 1024).toFixed(2);
            const compressedKB = (compressedSize / 1024).toFixed(2);

            console.log(
                `  ✅ Compressed: ${originalKB}KB \n→ ${compressedKB}KB (${savings}% smaller)`
            );
            return true;
        } else {
            /* Compressed version is not smaller, keep original bytes unchanged and do not add any metadata */
            if (fs.existsSync(tempOutput)) {
                fs.unlinkSync(tempOutput);
            }

            console.log(`  ℹ️  Already optimal, original kept unchanged`);
            return true;
        }
    } catch (error) {
        console.error(`  ❌ Error: ${error.message}`);
        if (fs.existsSync(tempOutput)) {
            fs.unlinkSync(tempOutput);
        }
        return false;
    }
}

/**
 * Main function
 */
async function main() {
    console.log('🖼️  Image Compression Script\n');

    let totalCompressed = 0;
    let totalSkipped = 0;
    let totalFailed = 0;
    let totalFiles = 0;

    for (const dir of TARGET_DIRS) {
        if (!fs.existsSync(dir)) continue;

        console.log(`📁 Scanning for images in: \n${dir}\n`);

        const imageFiles = findImageFiles(dir);
        totalFiles += imageFiles.length;

        if (imageFiles.length === 0) {
            console.log('No image files found in this folder.');
            continue;
        }

        console.log(`Found ${imageFiles.length} image \nfile(s)\n`);

        let compressed = 0;
        let skipped = 0;
        let failed = 0;

        for (const file of imageFiles) {
            const alreadyCompressed = await isAlreadyCompressed(file);

            if (alreadyCompressed) {
                console.log(
                    `⏭️  Skipping (already \ncompressed): ${path.relative(dir, file)}`
                );
                skipped++;
            } else {
                const success = await compressImage(file, dir);
                if (success) {
                    compressed++;
                } else {
                    failed++;
                }
            }
            console.log('');
        }

        console.log('📊 Folder summary:');
        console.log(`  ✅ Compressed: ${compressed}`);
        console.log(`  ⏭️  Skipped: ${skipped}`);
        if (failed > 0) {
            console.log(`  ❌ Failed: ${failed}`);
        }
        console.log('');

        totalCompressed += compressed;
        totalSkipped += skipped;
        totalFailed += failed;
    }

    console.log('📈 Overall summary:');
    console.log(`  🖼️  Files scanned: ${totalFiles}`);
    console.log(`  ✅ Compressed: ${totalCompressed}`);
    console.log(`  ⏭️  Skipped: ${totalSkipped}`);
    if (totalFailed > 0) {
        console.log(`  ❌ Failed: ${totalFailed}`);
    }
}

main().catch(console.error);
