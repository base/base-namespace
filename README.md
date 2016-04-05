# base-namespace [![NPM version](https://img.shields.io/npm/v/base-namespace.svg?style=flat)](https://www.npmjs.com/package/base-namespace) [![NPM downloads](https://img.shields.io/npm/dm/base-namespace.svg?style=flat)](https://npmjs.org/package/base-namespace) [![Build Status](https://img.shields.io/travis/jonschlinkert/base-namespace.svg?style=flat)](https://travis-ci.org/jonschlinkert/base-namespace)

> Plugin that adds a `namespace` getter to a Base instance.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install base-namespace --save
```

## Usage

```js
var namespace = require('base-namespace');
var Base = require('base');
var base = new Base();

base.use(namespace());
```

**Default**

By default, `namespace` uses the `app._name` property, which is uses the constructor name (set in [base][]):

```js
console.log(base.namespace);
//=> 'base'
```

**Alias**

If `alias` is defined, it will be used instead of `app._name`:

```js
base.alias = 'foo';
console.log(base.namespace);
//=> 'foo'
```

**Parent namespace**

If a `parent` instance is defined, `namespace` is created from `parent.namespace` + `alias`:

```js
var foo = new Base();
foo.alias = 'whatever';
base.parent = foo;

base.alias = 'foo';
console.log(base.namespace);
//=> 'whatever.foo'
```

**Multiple ancestors**

When an app has multiple ancestors, its `namespace` might look something like this:

```js
var foo = new Base();
foo.alias = 'foo';

var bar = new Base();
bar.alias = 'bar';
bar.parent = foo;

var baz = new Base();
baz.alias = 'baz';
baz.parent = bar;

var qux = new Base();
qux.alias = 'qux';
qux.parent = baz;

console.log(qux.namespace);
//=> 'foo.bar.baz.qux'
```

## Related projects

You might also be interested in these projects:

* [base](https://www.npmjs.com/package/base): base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting… [more](https://www.npmjs.com/package/base) | [homepage](https://github.com/node-base/base)
* [base-env](https://www.npmjs.com/package/base-env): Base plugin, creates a normalized environment object from a function, filepath or instance of base. | [homepage](https://github.com/node-base/base-env)
* [base-generators](https://www.npmjs.com/package/base-generators): Adds project-generator support to your `base` application. | [homepage](https://github.com/node-base/base-generators)
* [base-task](https://www.npmjs.com/package/base-task): base plugin that provides a very thin wrapper around [https://github.com/doowb/composer](https://github.com/doowb/composer) for adding task methods to… [more](https://www.npmjs.com/package/base-task) | [homepage](https://github.com/node-base/base-task)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/base-namespace/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/base-namespace/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v, on April 05, 2016._