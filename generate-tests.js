const fs = require("fs");
const path = require("path");

// 1. Base directory of components
const baseDir = path.join(__dirname, "components");

// 2. Recursively collect .js files (excluding .test.js)
function walk(dir) {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(walk(fullPath));
    } else if (file.endsWith(".js") && !file.endsWith(".test.js")) {
      files.push(fullPath);
    }
  }
  return files;
}

// 3. Convert file name to PascalCase component name
function toComponentName(fileName) {
  return fileName
    .replace(/\.js$/, "")
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

// 4. Generate Jest test template for a React component
function generateTestTemplate(componentPath, importPath) {
  const fileName = path.basename(componentPath, ".js");
  const componentName = toComponentName(fileName);
  return `import React from "react";
import { render, screen } from "@testing-library/react";
import ${componentName} from "${importPath}";

describe("${componentName}", () => {
  test("renders without crashing", () => {
    render(<${componentName} />);
    // screen.debug(); // Uncomment for debugging output
  });
});
`;
}

// 5. Run it!
const jsFiles = walk(baseDir);

jsFiles.forEach((filePath) => {
  const testFilePath = filePath.replace(/\.js$/, ".test.js");

  if (!fs.existsSync(testFilePath)) {
    const relativeImportPath = "./" + path.basename(filePath); // assumes tests are beside source
    const testContent = generateTestTemplate(filePath, relativeImportPath);
    fs.writeFileSync(testFilePath, testContent);
    console.log(`✅ Created: ${testFilePath}`);
  } else {
    console.log(`⚠️  Skipped (exists): ${testFilePath}`);
  }
});
