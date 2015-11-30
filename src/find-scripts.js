function startsWith(prefix, str) {
  return str.indexOf(prefix) === 0;
}

function findScripts(prefix, scripts) {
  const startsWithPrefix = startsWith.bind(null, prefix);
  const matchingScripts = Object.keys(scripts).filter(startsWithPrefix);
  return matchingScripts;
}

module.exports = findScripts;
