const { writeFileSync, readdir } = require('fs');
const { resolve } = require('path');

const createIndexFile = () => {
  const sourcePath = resolve('src');

  readdir(sourcePath, (err, files) => {
    const output =
      files &&
      files
        .filter(file => file.endsWith('.js'))
        .map(fileName => {
          const exportName = fileName.split('.js').slice(0, -1);
          return `export { default as ${exportName} } from "./src/${fileName}";`;
        })
        .join('\n');

    writeFileSync(resolve('./index.js'), output);
    console.log(`⚡️  Build completed ⚡️`);
  });
};

createIndexFile();
