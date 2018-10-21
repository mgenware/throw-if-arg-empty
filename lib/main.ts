function isEmptyArray(a: unknown): boolean {
  return Array.isArray(a) && !a.length;
}

function panic(name: string) {
  if (!name) {
    throw new Error('The argument cannot be empty');
  }
  throw new Error(`The argument "${name}" cannot be empty`);
}

export function throwIfEmptyNoArray(argument: unknown, name: string) {
  // tslint:disable-next-line
  if (argument === undefined || argument === null) {
    panic(name);
  }
}

export function throwIfEmpty(argument: unknown, name: string) {
  throwIfEmptyNoArray(argument, name);
  if (isEmptyArray(argument)) {
    panic(name);
  }
}

export function throwIfFalsyNoArray(argument: unknown, name: string) {
  if (!argument) {
    panic(name);
  }
}

export function throwIfFalsy(argument: unknown, name: string) {
  throwIfFalsyNoArray(argument, name);
  if (isEmptyArray(argument)) {
    panic(name);
  }
}
