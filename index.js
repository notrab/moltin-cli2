#!/usr/bin/env node

const program = require('commander');

const pkg = require('./package.json');
const main = require('./main');

program
  .version(pkg.version)
  .description('Power your moltin store with a ready-to-go web application.');

program
  .arguments('<appName>')
  .description('Name of project')
  .action(main);

program.parse(process.argv);
