function pick(obj, keys) {
  const result = {};
  for (let key of keys) {
    result[key] = obj[key];
  }
  return result;
}

function pick2(obj, ...keys) {
  keys = keys.flat(); // This allows us to pass both arrays and invidiual separated params
  const result = [];
  for (let key in obj) {
    if (keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(pick(obj, ["b", "a", "d"]));

const obj2 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(pick2(obj2, ["b", "a", "d"]));

const obj3 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(pick2(obj3, "b", "a", "d"));
