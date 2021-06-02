function omit(obj, keys) {
  const result = Object.assign({}, obj);
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
}

function omit2(obj, keys) {
  const result = {};
  for (let key in obj) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

function omit3(obj, ...keys) {
  keys = keys.flat();
  const result = Object.assign({}, obj);
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
}

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(omit(obj, ["b", "c", "d"]));
console.log(omit2(obj, ["b", "c", "d"]));
console.log(omit3(obj, "b", "c", "d"));
