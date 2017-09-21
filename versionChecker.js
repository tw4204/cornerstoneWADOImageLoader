const path = require('path');
const fs = require('fs');
const semver = require('semver');

const rootFolder = process.cwd();
const myPackage = require(`${__dirname}/package.json`);

if (fs.existsSync(`${rootFolder}/node_modules/cornerstone-core`)) {
  const package = require(`${rootFolder}/node_modules/cornerstone-core/package.json`);

  if (!semver.satisfies(package.version, myPackage.dependencies['cornerstone-core'])) {
    throw new Error(`You have a version for CORNERSTONE-CORE which is not compatible with CORNERSTONE-WADO-IMAGE-LOADER. Please use the version ${myPackage.dependencies['cornerstone-core']} of CORNERSTONE-CORE`);
  }
}