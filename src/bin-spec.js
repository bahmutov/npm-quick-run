const execaWrap = require('execa-wrap')
const snapshot = require('snap-shot-it')
const { join } = require('path')

/* eslint-env mocha */
describe('quick run bin', () => {
  const bin = join(__dirname, '..', 'bin', 'npm-quick-run.js')

  it('shows available scripts with prefix', () => {
    return execaWrap('node', [bin, 't'], { filter: ['stdout', 'stderr'] })
      .then(snapshot)
  })

  it('runs by prefix', () => {
    const removePath = (s) => {
      return s.split('\n')
        .filter(s => !s.includes('> npm-quick-run'))
        .join('\n')
    }
    return execaWrap('node', [bin, 'ech'], { filter: ['stdout', 'stderr'] })
      .then(removePath)
      .then(snapshot)
  })
})
