#!/usr/bin/env node --harmony

'use strict';

const help = [
  'use: nrun <npm script prefix> <script arguments>',
  'for example, run tests with "nrun t"',
  'or if you have "lint" script run it with "nrun l"'
].join('\n');

require('simple-bin-help')({
  minArguments: 3,
  packagePath: __dirname + '/../package.json',
  help: help
});

const prefix = process.argv[2];

const quickRun = require('..');
quickRun(prefix);
