function isMany (names) {
  const splitLinesMin = 3
  return names.length > splitLinesMin
}

function printNames (label, names, log) {
  if (!log) {
    log = console.error.bind(console)
  }
  var sorted = names.sort()
  const joiner = isMany(names) ? '\n - ' : ', '
  if (isMany) {
    sorted = [''].concat(sorted)
  }
  log(label, sorted.join(joiner))
}

module.exports = printNames
