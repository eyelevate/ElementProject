const replace = require('replace-in-file');
const angFile = require('./angular.json');

/* CHANGE THIS ONLY */
const newProjectName = 'ElementProject';

/* variables */
const oldProjectName = angFile.defaultProject;
const kcaseNewName = kcasing(newProjectName);
const kcaseOldName = kcasing(oldProjectName);

const options = {
  files: [
    './package.json',
    './angular.json',
    './src/app/app.module.ts',
    './src/index.html'
  ],
  from: [kcaseOldName, 'app-root', new RegExp(oldProjectName,'g')],
  to: [kcaseNewName, kcaseNewName , newProjectName]
};
run();

async function run() {
  try {
    const results = await replace(options);
    console.log('Replacement results: ', results);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
};

function kcasing(name) {
  return name.replace(/([a-z])([A-Z])/g, "$1-$2")
             .replace(/\s+/g, '-')
             .toLowerCase();
}
