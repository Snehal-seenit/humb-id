const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "components");

function walk(dir) {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(walk(fullPath));
    } else if (
      file.endsWith(".js") &&
      !file.endsWith(".test.js")
    ) {
      files.push(fullPath);
    }
  }
  return files;
}

function toComponentName(fileName) {
  // e.g. "card-slider-two" => "CardSliderTwo"
  return fileName
    .replace(/\.js$/, "")
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function generateTestTemplate(componentPath, importPath) {
  const fileName = path.basename(componentPath, ".js");
  const componentName = toComponentName(fileName);
  return `import React from "react";
import { render, screen } from "@testing-library/react";
import ${componentName} from "${importPath}";

describe("${componentName}", () => {
  test("renders without crashing", () => {
    render(<${componentName} />);
    // screen.debug();
  });
});
`;
}

const jsFiles = walk(baseDir);

jsFiles.forEach((filePath) => {
  const testFilePath = filePath.replace(/\.js$/, ".test.js");
  if (!fs.existsSync(testFilePath)) {
    const importPath = "./" + path.basename(filePath);
    const testContent = generateTestTemplate(filePath, importPath);
    fs.writeFileSync(testFilePath, testContent);
    console.log(`✅ Created: ${testFilePath}`);
  } else {
    console.log(`⚠️  Skipped (exists): ${testFilePath}`);
  }
});
