# throw-if-arg-empty

[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg?style=flat-square)](https://github.com/mgenware/MEAN-Module)
[![Build Status](https://img.shields.io/travis/mgenware/throw-if-arg-empty.svg?style=flat-square&label=Build+Status)](https://travis-ci.org/mgenware/throw-if-arg-empty)
[![npm version](https://img.shields.io/npm/v/throw-if-arg-empty.svg?style=flat-square)](https://npmjs.com/package/throw-if-arg-empty)
[![Node.js Version](http://img.shields.io/node/v/throw-if-arg-empty.svg?style=flat-square)](https://nodejs.org/en/)

Throw if an argument is empty. Dead simple, no dependencies.

### Installation
```sh
yarn add throw-if-arg-empty
```

### Example
```js
const { throwIfEmpty } = require('throw-if-arg-empty');

function foo(name) {
  throwIfEmpty(name, 'name');
}

foo();
// throws: Error: The argument "name" cannot be empty
```

### APIs
```js
// Throws if argument is `undefined` or `null`.
function throwIfEmptyNoArray(argument: unknown, name: string): void;

// Throws if argument is `undefined`, `null` or an empty array.
function throwIfEmpty(argument: unknown, name: string): void;

// Throws if argument is falsy.
function throwIfFalsyNoArray(argument: unknown, name: string): void;

// Throws if argument is falsy or an empty array.
function throwIfFalsy(argument: unknown, name: string): void;
```
