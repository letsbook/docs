#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
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
async function compressImage(filePath) {
    const dir = path.dirname(filePath);
    const ext = path.extname(filePath);
    const basename = path.basename(filePath, ext);
    const tempOutput = path.join(dir, `${basename}.temp${ext}`);

    console.log(`  Compressing: 
${path.relative(DOCS_DIR, filePath)}`);

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

        /* Only replace if we actually saved space (at least 1%) */
        if (compressedSize < originalSize * 0.99) {
            const savings = (
                ((originalSize - compressedSize) / originalSize) *
                100
            ).toFixed(1);

            // Replace original with compressed version
            fs.unlinkSync(filePath);
            fs.renameSync(tempOutput, filePath);

            const originalKB = (originalSize / 1024).toFixed(2);
            const compressedKB = (compressedSize / 1024).toFixed(2);

            console.log(`  ✅ Compressed: ${originalKB}KB 
→ ${compressedKB}KB (${savings}% smaller)`);
            return true;
        } else {
            /* Compressed version is not smaller, keep original and mark it */
            fs.unlinkSync(tempOutput);

            // Just add metadata without recompressing
            await sharp(filePath)
                .withMetadata({
                    exif: {
                        IFD0: {
                            ImageDescription: COMPRESSION_MARKER,
                        },
                    },
                })
                .toFile(tempOutput);

            fs.unlinkSync(filePath);
            fs.renameSync(tempOutput, filePath);

            console.log(`  ℹ️  Already optimal, marked as 
processed`);
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

    console.log(`📁 Scanning for images in: 
${DOCS_DIR}\n`);

    const imageFiles = findImageFiles(DOCS_DIR);

    if (imageFiles.length === 0) {
        console.log('No image files found.');
        return;
    }

    console.log(`Found ${imageFiles.length} image 
file(s)\n`);

    let compressed = 0;
    let skipped = 0;
    let failed = 0;

    for (const file of imageFiles) {
        const alreadyCompressed = await isAlreadyCompressed(file);

        if (alreadyCompressed) {
            console.log(`⏭️  Skipping (already 
compressed): ${path.relative(DOCS_DIR, file)}`);
            skipped++;
        } else {
            const success = await compressImage(file);
            if (success) {
                compressed++;
            } else {
                failed++;
            }
        }
        console.log('');
    }

    console.log('📊 Summary:');
    console.log(`  ✅ Compressed: ${compressed}`);
    console.log(`  ⏭️  Skipped: ${skipped}`);
    if (failed > 0) {
        console.log(`  ❌ Failed: ${failed}`);
    }
}

main().catch(console.error);
