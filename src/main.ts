function isEmptyArray(a: unknown): boolean {
  return Array.isArray(a) && !a.length;
}

function panic(name: string) {
  throw new Error(`The argument "${name}" cannot be empty`);
}

export function throwIfEmptyStrict<T>(val: T, name: string): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    panic(name);
  }
}

export function throwIfEmpty<T>(val: T, name: string): asserts val is NonNullable<T> {
  throwIfEmptyStrict(val, name);
  if (isEmptyArray(val)) {
    panic(name);
  }
}

export function throwIfFalsyStrict<T>(val: T, name: string): asserts val {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!val) {
    panic(name);
  }
}

export function throwIfFalsy<T>(val: T, name: string): asserts val {
  throwIfFalsyStrict(val, name);
  if (isEmptyArray(val)) {
    panic(name);
  }
}
