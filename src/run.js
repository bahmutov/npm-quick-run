const spawn = require('cross-spawn')
const Promise = require('bluebird')

function formHumanCommand (app, parts) {
  return app + ' ' + parts.join(' ')
}

function runner (app, parts) {
  return new Promise(function (resolve, reject) {
    const npm = spawn(app, parts, { stdio: 'inherit' })
    let testErrors = ''

    npm.on('error', function (err) {
      console.error(err)
      testErrors += err.toString()
    })

    npm.on('exit', function (code) {
      if (code) {
        const command = formHumanCommand(app, parts)
        const msg = 'NPM command ' + command + ' failed with code ' + code
        console.error(msg)
        console.error(testErrors)
        const e = new Error(msg)
        e.code = code
        return reject(e)
      }
      resolve()
    })
  })
}

module.exports = runner
