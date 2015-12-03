const findScripts = require('./find-scripts');
const runNpmCommand = require('npm-utils').test;

function printAllScripts(pkg) {
  console.error('Available scripts are', Object.keys(pkg.scripts).join(', '));
}

function runPrefix(prefix) {

  const pkg = require(process.cwd() + '/package.json');
  if (!pkg.scripts) {
    console.error('Cannot find any scripts in the current package');
    process.exit(-1);
  }

  if (!prefix) {
    printAllScripts(pkg);
    return;
  }
  console.log('running command with prefix "' + prefix + '"');

  const candidates = findScripts(prefix, pkg.scripts);
  if (!candidates.length) {
    console.error('Cannot find any scripts starting with "%s"', prefix);
    printAllScripts(pkg);
    process.exit(-1);
  }
  if (candidates.length > 1) {
    console.error('Several scripts start with "%s":', prefix, candidates.join(', '));
    console.error('Be more specific');
    process.exit(-1);
  }

  var cmd = 'npm run ' + candidates[0];
  var extraArguments = process.argv.slice(3);
  if (extraArguments.length) {
    cmd += ' -- ' + extraArguments.join(' ');
  }
  runNpmCommand(cmd);
}

module.exports = runPrefix;
