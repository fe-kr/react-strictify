export function isDefined<T>(value: T | undefined): value is T {
  return typeof value !== "undefined";
}

export function isNull(value: unknown): value is null {
  return value === null;
}
