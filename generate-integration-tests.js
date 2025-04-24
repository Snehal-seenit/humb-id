const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "components"); // adjust to your integration-scope dir
const testSuffix = ".integration.test.js";

function walk(dir) {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(walk(fullPath));
    } else if (
      file.endsWith(".js") &&
      !file.endsWith(".test.js") &&
      !file.endsWith(testSuffix)
    ) {
      files.push(fullPath);
    }
  }
  return files;
}

function toComponentName(fileName) {
  return fileName
    .replace(/\.js$/, "")
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function generateIntegrationTest(componentPath, importPath) {
  const fileName = path.basename(componentPath, ".js");
  const componentName = toComponentName(fileName);

  return `import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ${componentName} from "${importPath}";

describe("Integration: ${componentName}", () => {
  test("renders and handles basic user interaction", () => {
    render(<${componentName} />);

    // Example checks – customize these!
    // const button = screen.getByRole("button", { name: /submit/i });
    // fireEvent.click(button);
    // expect(screen.getByText(/success/i)).toBeInTheDocument();
  });
});
`;
}

const jsFiles = walk(baseDir);

jsFiles.forEach((filePath) => {
  const testFilePath = filePath.replace(/\.js$/, testSuffix);
  if (!fs.existsSync(testFilePath)) {
    const relativeImportPath = "./" + path.basename(filePath);
    const testContent = generateIntegrationTest(filePath, relativeImportPath);
    fs.writeFileSync(testFilePath, testContent);
    console.log(`🧪 Created: ${testFilePath}`);
  } else {
    console.log(`⚠️  Skipped (exists): ${testFilePath}`);
  }
});
