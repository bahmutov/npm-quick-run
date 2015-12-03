#!/usr/bin/env node --harmony

'use strict'

const quickRun = require('..')

const help = [
  'USE: nrun <npm script prefix> <script arguments>',
  '\t"nr t" === "nrun t" === "npm test"',
  '\t"nr m -w" probably will find "npm run mocha -- --w"'
].join('\n')

require('simple-bin-help')({
  minArguments: 3,
  packagePath: __dirname + '/../package.json',
  help: help,
  noExit: true,
  onFail: function () {
    quickRun()
    process.exit(0)
  }
})

const prefix = process.argv[2]
quickRun(prefix)
