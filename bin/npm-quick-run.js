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
console.log('running prefix', prefix);
const pkg = require(process.cwd() + '/package.json');
if (!pkg.scripts) {
  console.error('Cannot find any scripts in the current package');
  process.exit(-1);
}

function startsWith(prefix, str) {
  return str.indexOf(prefix) === 0;
}

function findScripts(prefix, scripts) {
  const startsWithPrefix = startsWith.bind(null, prefix);
  const matchingScripts = Object.keys(scripts).filter(startsWithPrefix);
  return matchingScripts;
}

const candidates = findScripts(prefix, pkg.scripts);
if (!candidates.length) {
  console.error('Cannot find any scripts starting with "%s"', prefix);
  console.error('Available scripts are', Object.keys(pkg.scripts).join(', '));
  process.exit(-1);
}
if (candidates.length > 1) {
  console.error('Several scripts start with "%s":', prefix, candidates.join(', '));
  console.error('Be more specific');
  process.exit(-1);
}
