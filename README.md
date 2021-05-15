# throw-if-arg-empty

[![Build Status](https://github.com/mgenware/throw-if-arg-empty/workflows/Build/badge.svg)](https://github.com/mgenware/throw-if-arg-empty/actions)
[![npm version](https://img.shields.io/npm/v/throw-if-arg-empty.svg?style=flat-square)](https://npmjs.com/package/throw-if-arg-empty)
[![Node.js Version](http://img.shields.io/node/v/throw-if-arg-empty.svg?style=flat-square)](https://nodejs.org/en/)

Throws if the specified argument is empty/nullable.

### Installation

```sh
yarn add throw-if-arg-empty
```

### Example

```js
import { throwIfEmpty } from 'throw-if-arg-empty';

function foo(name) {
  throwIfEmpty(name, 'name');
}

foo();
// throws: Error: The argument "name" cannot be empty
```

### APIs

```typescript
// Throws if argument is `undefined` or `null`.
function throwIfEmptyStrict(argument: unknown, name: string): void;

// Throws if argument is `undefined`, `null` or an empty array.
function throwIfEmpty(argument: unknown, name: string): void;

// Throws if argument is falsy.
function throwIfFalsyStrict(argument: unknown, name: string): void;

// Throws if argument is falsy or an empty array.
function throwIfFalsy(argument: unknown, name: string): void;
```
