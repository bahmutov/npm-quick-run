const mockFS = require('mock-fs')
const execaWrap = require('execa-wrap')
const snapshot = require('snap-shot-it')

/* global describe, it */
describe('quick run', () => {
  const quickRun = require('./quick-run')
  it('is a function', () => {
    console.assert(typeof quickRun === 'function')
  })

  it('runs npm when package-lock.json is present', () => {
    return new Promise(resolve => {
      mockFS({
        'package-lock.json': {}
      })
      resolve()
    }).then(() => {
      let pm = quickRun.getPackageManager()
      console.assert(pm === 'npm')
    }).finally(() => {
      mockFS.restore()
    })
  })

  it('runs yarn when yarn.lock is present', () => {
    return new Promise(resolve => {
      mockFS({
        'yarn.lock': {}
      })
      resolve()
    }).then(() => {
      let pm = quickRun.getPackageManager()
      console.assert(pm === 'yarn')
    }).finally(() => {
      mockFS.restore()
    })
  })
})
