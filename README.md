# npm-quick-run

> Quickly run NPM script by prefix without typing the full name

[![NPM][npm-quick-run-icon] ][npm-quick-run-url]

[![Build status][npm-quick-run-ci-image] ][npm-quick-run-ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![manpm](https://img.shields.io/badge/manpm-%E2%9C%93-3399ff.svg)](https://github.com/bahmutov/manpm)
[![standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

Install as a global tool `npm install -g npm-quick-run`. This creates two aliases `nrun` and `nr`

## Use example

    $ nr t      # runs script starting with "t"
    $ nr m -w   # runs a script starting with "m", probably "npm run mocha -- -w"

## Demo

Watch this screencast to see `npm-quick-run` in action. I am using `nr` alias

[![demo](https://asciinema.org/a/31015.png)](https://asciinema.org/a/31015)

## Details

Take a look at the scripts inside your `package.json`. You probably have something like
this

```json
"scripts": {
  "test": "...",
  "lint": "..."
}
```

You can quickly run tests using `nr t` and run the linter using `nr l`, assuming there are
no other script names starting with `t` or `l`. If there are, just be more specific and provide
more unique prefix.

## Extra arguments

You can pass extra arguments right after the prefix string

    nr t --watch

would be the same as

    npm run test -- --watch

which can run Mocha unit tests in the watching mode for example.

## Error handling

If there are no scripts starting with the given prefix, an error message will be shown.
If there are multiple scripts, they will be printed to the console and an error will be shown.

## Similar projects

* [as-a](https://github.com/bahmutov/as-a) adds env variables before running a command
* [json-package](https://github.com/bahmutov/json-package) quickly shows value from `package.json`
  by property name prefix
* [npm-run](https://www.npmjs.com/package/npm-run) run locally-installed executables to avoid
  using long string `node node_modules/.bin/some-alias ...`
* [nrun](https://github.com/2do2go/nrun) is very similar to this project, but the script name
  completion is done via shell script, see [the relevant issue](https://github.com/2do2go/nrun/issues/3)

### Benefits compared to similar projects

* `npm-quick-run` is cross platform - the command completion is done in JS
* Boilerplate NPM error output is filtered out automatically
* Most commands require typing only 3 characters - 2 for the tool itself "nr" and 1 character for the
the script label

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/npm-quick-run/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-quick-run-icon]: https://nodei.co/npm/npm-quick-run.png?downloads=true
[npm-quick-run-url]: https://npmjs.org/package/npm-quick-run
[npm-quick-run-ci-image]: https://travis-ci.org/bahmutov/npm-quick-run.png?branch=master
[npm-quick-run-ci-url]: https://travis-ci.org/bahmutov/npm-quick-run
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
