const package = require('./angular.json');
const fs = require('fs-extra');
const project = package.defaultProject;
const srcPath = `dist/${project}`;
const destPath = `../Bonds/wwwroot/lib/custom-components/${project}`;
(async function build() {
  try {
    await fs.ensureDir(destPath)
    await fs.emptyDirSync(destPath);
    await fs.copySync(srcPath,destPath);
    console.info(`Build is complete and ready to use in project - ${project}`);

  } catch(err) {
    console.error(err);
  }
})()
