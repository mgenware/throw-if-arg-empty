const {
  throwIfEmptyStrict,
  throwIfEmpty,
  throwIfFalsyStrict,
  throwIfFalsy,
} = require('..');
const assert = require('assert');
const MSG = 'argument "name" cannot be empty';

function run(name, func, value, throws) {
  it(name, () => {
    const body = () => func(value, 'name');
    if (throws) {
      assert.throws(body, MSG);
    } else {
      assert.doesNotThrow(body);
    }
  });
}

function t(value, expected) {
  run(`${value}: throwIfEmptyStrict`, throwIfEmptyStrict, value, expected[0]);
  run(`${value}: throwIfEmpty`, throwIfEmpty, value, expected[1]);
  run(`${value}: throwIfFalsyStrict`, throwIfFalsyStrict, value, expected[2]);
  run(`${value}: throwIfFalsy`, throwIfFalsy, value, expected[3]);
}

t(undefined, [true, true, true, true]);
t(null, [true, true, true, true]);
t('', [false, false, true, true]);
t(false, [false, false, true, true]);
t([], [false, true, false, true]);
t([1, 2], [false, false, false, false]);
