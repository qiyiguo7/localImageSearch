const fs = require("fs");
const path = require("path");

function getDirectoryStructure(dirPath, level = 0) {
  const items = fs.readdirSync(dirPath);
  let result = "";

  items.forEach((item) => {
    // 排除 .git 和 node_modules 目录
    if (item === ".git" || item === "node_modules") {
      return;
    }

    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    const indent = " ".repeat(level * 2);

    if (stat.isDirectory()) {
      result += `${indent}├── ${item}\n`;
      result += getDirectoryStructure(fullPath, level + 1);
    } else {
      result += `${indent}├── ${item}\n`;
    }
  });

  return result;
}

// 获取项目根目录的文件结构
const directoryStructure = getDirectoryStructure("./", 0);

// 将结果写入 README.md 文件
fs.writeFileSync(
  "README.md",
  `## 项目文件结构\n\n\`\`\`\n${directoryStructure}\n\`\`\`\n`
);
