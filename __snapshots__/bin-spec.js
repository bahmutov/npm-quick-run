exports['quick run bin shows available scripts with prefix 1'] = `
  stdout:
  -------
  running command with prefix "t"
  -------
  stderr:
  -------
  Several scripts start with "t" test, test-foo
  -------

`

exports['quick run bin runs by prefix 1'] = `
  stdout:
  -------
  running command with prefix "ech"

  > echo hello

  hello
  -------
  stderr:
  -------
  
  -------

`
