/* global describe, it */
describe('print names', () => {
  const printNames = require('./print-names')

  function isString (s) {
    return typeof s === 'string'
  }

  function singleLine (s) {
    return isString(s) &&
      s.indexOf('\n') === -1
  }

  function singleComma (s) {
    return isString(s) &&
      s.split(',').length === 2
  }

  function joinArguments () {
    return Array.prototype.join.call(arguments, ' ')
  }

  it('prints few labels in single line', () => {
    function checkOutput () {
      const str = joinArguments.apply(null, arguments)
      console.assert(singleLine(str), str)
    }
    printNames('few', ['foo', 'bar'], checkOutput)
  })

  it('only has single comma', () => {
    function checkOutput () {
      const str = joinArguments.apply(null, arguments)
      console.assert(singleComma(str), str)
    }
    printNames('few', ['foo', 'bar'], checkOutput)
  })

  it('prints many labels on separate lines', () => {
    function checkOutput () {
      const str = joinArguments.apply(null, arguments)
      console.assert(!singleLine(str), str)
    }
    printNames('many', ['a', 'b', 'c', 'd', 'e', 'f'], checkOutput)
  })
})
