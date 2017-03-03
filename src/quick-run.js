const debug = require('debug')('quick')
const findScripts = require('json-package').find
const join = require('path').join
const findup = require('findup')
const inquirer = require('inquirer')
const fuzzy = require('fuzzy')
const chalk = require('chalk')
const inquirerAutocompletePrompt = require('inquirer-autocomplete-prompt')
const printNames = require('json-package').printNames
const run = require('./run')

inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt)

function inquireScript (pkg) {
  var choices = Object.keys(pkg.scripts).map(function (k) {
    return {
      name: chalk.bold.cyan(k) + ' ' + chalk.gray(pkg.scripts[k]),
      value: k,
      short: k
    }
  })

  return inquirer.prompt([{
    type: 'autocomplete',
    name: 'script',
    message: 'What script do you want to execute?',
    choices: choices,
    source: function source (answers, input) {
      input = input || ''
      return new Promise(function (resolve) {
        const fuzzyResult = fuzzy.filter(input, choices, {
          extract: function (el) { return el.value }
        })

        resolve(fuzzyResult.map(function (el) {
          return el.original
        }))
      })
    }
  }])
}

const npmErrorLoggers = {
  errorOutput: '',
  npmErrorStarted: false,
  stdout: function (str) {
    process.stdout.write(str)
  },
  stderr: function (str) {
    if (npmErrorLoggers.npmErrorStarted) {
      return
    }
    npmErrorLoggers.errorOutput += str
    if (/npm ERR/.test(npmErrorLoggers.errorOutput)) {
      npmErrorLoggers.npmErrorStarted = true
      process.stderr.write('\n')
      return
    }
    // TODO buffer by line
    process.stderr.write(str)
  }
}

// TODO replace with json-package implementation
function findPackage () {
  try {
    var fullPath = findup.sync(process.cwd(), 'package.json')
  } catch (e) {
    console.error('Cannot find package.json in the current folder and its ancestors')
    process.exit(-1)
  }
  const pkg = require(join(fullPath, 'package.json'))
  return pkg
}

function loadJson (filename) {
  if (!filename) {
    return findPackage()
  }
  return require(filename)
}

function runPrefix (prefix) {
  const pkg = loadJson()
  if (!pkg.scripts) {
    console.error('Cannot find any scripts in the current package')
    process.exit(-1)
  }

  if (!prefix) {
    inquireScript(pkg)
    return
  }
  console.log('running command with prefix "' + prefix + '"')

  const candidates = findScripts(prefix, pkg.scripts)
  if (!candidates.length) {
    console.error('Cannot find any scripts starting with "%s"', prefix)
    inquireScript(pkg)
    process.exit(-1)
  }
  if (candidates.length > 1) {
    printNames('Several scripts start with ' + '"' + prefix + '"',
      candidates)
    console.error('Be more specific')
    process.exit(-1)
  }

  debug('all arguments', process.argv)
  var extraArguments = ['run', candidates[0], '--'].concat(process.argv.slice(3))
  debug('formed command: npm', extraArguments)

  run('npm', extraArguments)
    .catch(function (result) {
      process.exit(result.code)
    })
}

module.exports = runPrefix
