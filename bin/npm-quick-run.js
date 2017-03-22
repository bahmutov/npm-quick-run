#!/usr/bin/env node

'use strict'

var debug = require('debug')('quick')
var quickRun = require('..')
var join = require('path').join

var help = [
  'USE: nrun [arguments] <npm script prefix> <script arguments>',
  '\t"nr t" === "nrun t" === "npm test"',
  '\t"nr m -w" probably will find "npm run mocha -- --w"',
  '\t"nr -i" launch with interactive mode'
].join('\n')

require('simple-bin-help')({
  minArguments: 3,
  packagePath: join(__dirname, '..', 'package.json'),
  help: help,
  noExit: true,
  onFail: function () {
    quickRun()
    process.exit(0)
  }
})

debug('arguments %d', process.argv.length, process.argv)
var prefix = process.argv[2]
quickRun(prefix)
