export function get(obj, string, defaultValue) {
  const parts = string.split(/[\]\[\.]/).filter((x) => x);
  let attempt = obj;
  for (let part of parts) {
    if (attempt == null || attempt[part] === undefined) return defaultValue;
    attempt = attempt[part];
  }
  return attempt;
}
