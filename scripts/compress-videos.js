#!/usr/bin/env node

const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const COMPRESSION_MARKER = 'letsbook-compressed';

/**
 * Check if ffmpeg is installed
 */
function checkFFmpeg() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.error('❌ ffmpeg is not installed or not in PATH');
    console.error('Install ffmpeg: https://ffmpeg.org/download.html');
    process.exit(1);
  }
}

/**
 * Check if a video has already been compressed by our script
 */
function isAlreadyCompressed(filePath) {
  try {
    const result = spawnSync('ffmpeg', [
      '-i',
      filePath,
      '-f',
      'ffmetadata',
      '-'
    ], {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe']
    });

    const metadata = result.stdout;
    return metadata.includes(`comment=${COMPRESSION_MARKER}`);
  } catch (error) {
    return false;
  }
}

/**
 * Find all MP4 files in the docs directory
 */
function findMP4Files(dir) {
  let mp4Files = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      mp4Files = mp4Files.concat(findMP4Files(fullPath));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.mp4')) {
      mp4Files.push(fullPath);
    }
  }

  return mp4Files;
}

/**
 * Compress a video file
 */
function compressVideo(filePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const basename = path.basename(filePath, ext);
  const tempOutput = path.join(dir, `${basename}.temp${ext}`);

  console.log(`  Compressing: ${path.relative(DOCS_DIR, filePath)}`);

  try {
    // Compress video with web optimization
    // - H.264 codec for broad compatibility
    // - CRF 23 for good quality/size balance
    // - Preset medium for balance of speed and compression
    // - Faststart flag for web streaming
    // - Scale down if larger than 1920px width
    const result = spawnSync('ffmpeg', [
      '-i', filePath,
      '-c:v', 'libx264',
      '-crf', '23',
      '-preset', 'medium',
      '-vf', 'scale=min(1920\\,iw):-2',
      '-c:a', 'aac',
      '-b:a', '128k',
      '-movflags', '+faststart',
      '-metadata', `comment=${COMPRESSION_MARKER}`,
      '-y',
      tempOutput
    ], {
      stdio: ['ignore', 'pipe', 'pipe']
    });

    if (result.error || result.status !== 0) {
      console.error(`  ❌ Failed to compress: ${result.stderr.toString()}`);
      if (fs.existsSync(tempOutput)) {
        fs.unlinkSync(tempOutput);
      }
      return false;
    }

    // Get file sizes for comparison
    const originalSize = fs.statSync(filePath).size;
    const compressedSize = fs.statSync(tempOutput).size;
    const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

    // Replace original with compressed version
    fs.unlinkSync(filePath);
    fs.renameSync(tempOutput, filePath);

    const originalMB = (originalSize / 1024 / 1024).toFixed(2);
    const compressedMB = (compressedSize / 1024 / 1024).toFixed(2);

    console.log(`  ✅ Compressed: ${originalMB}MB → ${compressedMB}MB (${savings}% smaller)`);
    return true;
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
function main() {
  console.log('🎬 Video Compression Script\n');

  checkFFmpeg();

  console.log(`📁 Scanning for MP4 files in: ${DOCS_DIR}\n`);

  const mp4Files = findMP4Files(DOCS_DIR);

  if (mp4Files.length === 0) {
    console.log('No MP4 files found.');
    return;
  }

  console.log(`Found ${mp4Files.length} MP4 file(s)\n`);

  let compressed = 0;
  let skipped = 0;
  let failed = 0;

  for (const file of mp4Files) {
    if (isAlreadyCompressed(file)) {
      console.log(`⏭️  Skipping (already compressed): ${path.relative(DOCS_DIR, file)}`);
      skipped++;
    } else {
      const success = compressVideo(file);
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

main();
