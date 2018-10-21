const {
  throwIfEmptyNoArray,
  throwIfEmpty,
  throwIfFalsyNoArray,
  throwIfFalsy,
} = require('..');
const MSG = 'The argument "name" cannot be empty';

function run(name, func, value, throws) {
  test(name, () => {
    const head = expect(() => func(value, 'name'));
    if (throws) {
      head.toThrow(MSG);
    } else {
      head.not.toThrow();
    }
  });
}

function t(value, expected) {
  run(`${value}: throwIfEmptyNoArray`, throwIfEmptyNoArray, value, expected[0]);
  run(`${value}: throwIfEmpty`, throwIfEmpty, value, expected[1]);
  run(`${value}: throwIfFalsyNoArray`, throwIfFalsyNoArray, value, expected[2]);
  run(`${value}: throwIfFalsy`, throwIfFalsy, value, expected[3]);
}

t(undefined, [true, true, true, true]);
t(null, [true, true, true, true]);
t('', [false, false, true, true]);
t(false, [false, false, true, true]);
t([], [false, true, false, true]);
t([1, 2], [false, false, false, false]);
