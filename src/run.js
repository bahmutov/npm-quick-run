var spawn = require('cross-spawn')
var Promise = require('bluebird')

function runner (app, parts) {
  return new Promise(function (resolve, reject) {
    var npm = spawn(app, parts, { stdio: 'inherit' })
    var testErrors = ''

    npm.on('error', function (err) {
      console.error(err)
      testErrors += err.toString()
    })

    npm.on('exit', function (code) {
      if (code) {
        reject({
          code: code,
          errors: testErrors
        })
        return
      }
      resolve()
    })
  })
}

module.exports = runner
