export function stringToBoolean(value: String): boolean {
  return value === "true" ? true : value === "false" ? false : null;
}
