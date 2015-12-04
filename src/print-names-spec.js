/* global describe, it */
describe('print names', () => {
  const printNames = require('./print-names')

  function singleLine (s) {
    return typeof s === 'string' &&
      s.indexOf('\n') === -1
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

  it('prints many labels on separate lines', () => {
    function checkOutput () {
      const str = joinArguments.apply(null, arguments)
      console.assert(!singleLine(str), str)
    }
    printNames('many', ['a', 'b', 'c', 'd', 'e', 'f'], checkOutput)
  })
})
