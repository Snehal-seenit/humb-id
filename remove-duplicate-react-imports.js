const fs = require('fs');
const path = require('path');

const directory = './components';  // Change this to your components folder or project root
const regex = /import\s+React\s+from\s+['"]react['"];/g;  // Match 'import React from "react";'

function removeDuplicates(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // If 'import React' exists more than once, remove duplicates
    const matches = content.match(regex);
    if (matches && matches.length > 1) {
        // Remove all but the first 'import React' statement
        const newContent = content.replace(regex, '').replace(/(\n\s*){2,}/g, '\n'); // remove multiple empty lines
        // Add the first 'import React' statement back at the top of the file
        const finalContent = `import React from "react";\n${newContent}`;
        fs.writeFileSync(filePath, finalContent, 'utf-8');
        console.log(`Removed duplicate React import in: ${filePath}`);
    }
}

function walkDirectory(dir) {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walkDirectory(filePath);  // Traverse subdirectories
        } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
            removeDuplicates(filePath);
        }
    });
}

walkDirectory(directory); // Call on your directory, e.g., './components'
