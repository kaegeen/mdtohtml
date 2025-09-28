// mdToHtml.js
const fs = require("fs");
const path = require("path");
const marked = require("marked");

// Input & output file paths
const inputFile = process.argv[2];
if (!inputFile) {
  console.log("Usage: node mdToHtml.js <filename.md>");
  process.exit(1);
}

const outputFile = path.basename(inputFile, ".md") + ".html";

// Read markdown file
fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Convert Markdown to HTML
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${outputFile}</title>
</head>
<body>
${marked.parse(data)}
</body>
</html>
`;

  // Save HTML file
  fs.writeFileSync(outputFile, html);
  console.log(`✅ Converted ${inputFile} → ${outputFile}`);
});
