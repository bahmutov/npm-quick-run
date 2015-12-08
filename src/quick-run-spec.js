/* global describe, it */
describe('quick run', () => {
  const quickRun = require('./quick-run')
  it('is a function', () => {
    console.assert(typeof quickRun === 'function')
  })
})
