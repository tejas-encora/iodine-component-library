const fs = require('fs-extra');
const path = require('path');

// Define source and destination paths
const sourcePath = path.join(__dirname, 'src/plugins');
const destinationPath = path.join(process.cwd(), '../../src/plugins');

// Check if the destination folder exists
if (!fs.existsSync(destinationPath)) {
    // If it doesn't exist, create the destination folder
    fs.mkdirSync(destinationPath, { recursive: true });
}

// Copy the source files to the destination
fs.copySync(sourcePath, destinationPath);

console.log('src/plugins copied to project root successfully!');
