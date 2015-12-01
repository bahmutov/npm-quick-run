function startsWith(prefix, str) {
  console.assert(typeof str === 'string', 'expected string', str);
  return str.indexOf(prefix) === 0;
}

function sameLength(a, b) {
  return a.length === b.length;
}

function matchesExactly(prefix, str) {
  return startsWith(prefix, str) &&
    sameLength(prefix, str);
}

function findScripts(prefix, scripts) {
  const labels = Object.keys(scripts);
  const matchesExactlyPrefix = matchesExactly.bind(null, prefix);
  const exactMatches = labels.filter(matchesExactlyPrefix);
  if (exactMatches.length === 1) {
    return exactMatches;
  }

  const startsWithPrefix = startsWith.bind(null, prefix);
  const matchingScripts = labels.filter(startsWithPrefix);
  return matchingScripts;
}

module.exports = findScripts;
