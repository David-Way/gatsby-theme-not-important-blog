const fs = require("fs");

module.exports = async ({ reporter }) => {
  const dataPath = "src/posts";
  if (!fs.existsSync(dataPath)) {
    reporter.info(`creating the ${dataPath} directory`);
    fs.mkdirSync(dataPath);
  }
};