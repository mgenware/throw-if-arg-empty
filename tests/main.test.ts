/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as assert from 'assert';
import {
  throwIfEmptyStrict,
  throwIfEmpty,
  throwIfFalsyStrict,
  throwIfFalsy,
} from '../dist/main.js';

const MSG = 'argument "name" cannot be empty';

function run(
  name: string,
  func: (argument: unknown, name: string) => void,
  value: unknown,
  throws: boolean,
) {
  it(name, () => {
    const body = () => func(value, 'name');
    if (throws) {
      assert.throws(body, MSG);
    } else {
      assert.doesNotThrow(body);
    }
  });
}

function t(value: unknown, expected: boolean[]) {
  run(`${value}: throwIfEmptyStrict`, throwIfEmptyStrict, value, expected[0]!);
  run(`${value}: throwIfEmpty`, throwIfEmpty, value, expected[1]!);
  run(`${value}: throwIfFalsyStrict`, throwIfFalsyStrict, value, expected[2]!);
  run(`${value}: throwIfFalsy`, throwIfFalsy, value, expected[3]!);
}

t(undefined, [true, true, true, true]);
t(null, [true, true, true, true]);
t('', [false, false, true, true]);
t(false, [false, false, true, true]);
t([], [false, true, false, true]);
t([1, 2], [false, false, false, false]);
