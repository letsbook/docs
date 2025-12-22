import {
    DeleteObjectCommand,
    ListObjectsV2Command,
    PutObjectCommand,
    S3Client,
} from '@aws-sdk/client-s3';
import { readFileSync, readdirSync, statSync } from 'fs';
import { lookup } from 'mime-types';
import { join, relative } from 'path';

const R2_ENDPOINT_URL = process.env.R2_ENDPOINT_URL;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;

const requiredEnvVars = {
    R2_ENDPOINT_URL,
    R2_BUCKET_NAME,
    R2_ACCESS_KEY_ID,
    R2_SECRET_ACCESS_KEY,
};

const missingVars = Object.entries(requiredEnvVars)
    .filter(([, value]) => !value)
    .map(([key]) => key);

if (missingVars.length > 0) {
    console.error('Missing required environment variables:');
    missingVars.forEach((key) => console.error(`  ${key}`));
    process.exit(1);
}

const s3Client = new S3Client({
    region: 'auto',
    endpoint: R2_ENDPOINT_URL,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
});

const SOURCE_DIR = 'public';

/**
 * Recursively get all files in a directory
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = readdirSync(dirPath);

    files.forEach((file) => {
        const fullPath = join(dirPath, file);
        if (statSync(fullPath).isDirectory()) {
            getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

/**
 * List all objects in the S3 bucket
 */
async function listAllObjects() {
    const objects = [];
    let continuationToken;

    do {
        const command = new ListObjectsV2Command({
            Bucket: R2_BUCKET_NAME,
            ContinuationToken: continuationToken,
        });

        const response = await s3Client.send(command);
        if (response.Contents) {
            objects.push(...response.Contents.map((obj) => obj.Key));
        }
        continuationToken = response.NextContinuationToken;
    } while (continuationToken);

    return objects;
}

/**
 * Upload a file to S3
 */
async function uploadFile(filePath, key) {
    const fileContent = readFileSync(filePath);
    const contentType = lookup(filePath) || 'application/octet-stream';

    const command = new PutObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: key,
        Body: fileContent,
        ContentType: contentType,
        ACL: 'public-read',
    });

    await s3Client.send(command);
    console.log(`Uploaded: ${key}`);
}

/**
 * Delete an object from S3
 */
async function deleteObject(key) {
    const command = new DeleteObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: key,
    });

    await s3Client.send(command);
    console.log(`Deleted: ${key}`);
}

/**
 * Main sync function - replicates `aws s3 sync --delete` behavior
 */
async function sync() {
    console.log(`Syncing ${SOURCE_DIR}/ to s3://${R2_BUCKET_NAME}/`);
    console.log(`Endpoint: ${R2_ENDPOINT_URL}`);
    console.log('');

    // Get all local files
    const localFiles = getAllFiles(SOURCE_DIR);
    const localKeys = new Set(
        localFiles.map((file) => relative(SOURCE_DIR, file))
    );

    // Get all remote objects
    const remoteKeys = await listAllObjects();

    // Upload all local files
    for (const filePath of localFiles) {
        const key = relative(SOURCE_DIR, filePath);
        await uploadFile(filePath, key);
    }

    // Delete remote objects that don't exist locally (--delete behavior)
    for (const remoteKey of remoteKeys) {
        if (!localKeys.has(remoteKey)) {
            await deleteObject(remoteKey);
        }
    }

    console.log('');
    console.log('Sync completed successfully!');
}

sync().catch((error) => {
    console.error('Sync failed:', error);
    process.exit(1);
});
