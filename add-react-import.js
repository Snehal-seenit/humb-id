const fs = require('fs');
const path = require('path');

// Adjust this if your components folder is elsewhere
const directoryPath = path.join(__dirname, 'components');

// Function to add 'import React' at the top of a file
const addReactImport = (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Only add import if it's not already there
    if (!fileContent.includes('import React from \'react\';')) {
      const updatedContent = `import React from 'react';\n${fileContent}`;
      fs.writeFileSync(filePath, updatedContent, 'utf-8');
      console.log(`Added React import to: ${filePath}`);
    } else {
      console.log(`React import already exists in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
};

// Function to recursively read files from the directory
const processDirectory = (directory) => {
  try {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);

      // If it's a directory, recurse into it
      if (stats.isDirectory()) {
        processDirectory(filePath);  // Recursively process subdirectories
      } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        addReactImport(filePath);  // Process .js and .jsx files
      }
    });
  } catch (error) {
    console.error('Error reading directory:', error);
  }
};

// Start processing the components directory
processDirectory(directoryPath);
