describe('find-scripts', function () {
  const find = require('./find-scripts');
  const scripts = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
  };

  it('is a function', function () {
    console.assert(typeof find === 'function');
  });

  it('finds nothing', function () {
    const found = find('a', scripts);
    console.assert(Array.isArray(found));
    console.assert(found.length === 0);
  });

  it('finds 1 partial match', function () {
    const found = find('f', scripts);
    console.assert(Array.isArray(found));
    console.assert(found.length === 1);
    console.assert(found[0] === 'foo');
  });

  it('finds 1 full match', function () {
    const found = find('foo', scripts);
    console.assert(Array.isArray(found));
    console.assert(found.length === 1);
    console.assert(found[0] === 'foo');
  });

  it('finds 2', function () {
    const found = find('b', scripts);
    console.assert(Array.isArray(found));
    console.assert(found.length === 2);
  });
});
