function isEmptyArray(a: unknown): boolean {
  return Array.isArray(a) && !a.length;
}

function panic(name: string) {
  throw new Error(`The argument "${name}" cannot be empty`);
}

export function throwIfEmptyStrict(argument: unknown, name: string) {
  // tslint:disable-next-line
  if (argument === undefined || argument === null) {
    panic(name);
  }
}

export function throwIfEmpty(argument: unknown, name: string) {
  throwIfEmptyStrict(argument, name);
  if (isEmptyArray(argument)) {
    panic(name);
  }
}

export function throwIfFalsyStrict(argument: unknown, name: string) {
  if (!argument) {
    panic(name);
  }
}

export function throwIfFalsy(argument: unknown, name: string) {
  throwIfFalsyStrict(argument, name);
  if (isEmptyArray(argument)) {
    panic(name);
  }
}
