export function mergeJSON(obj, ...sources) {
  for (let source of sources) {
    for (let key in source) {
      if (source[key] === null) continue;
      obj[key] = replaceValue(obj[key], source[key]);
    }
  }
  return obj;
}

function replaceValue(value, newValue) {
  if (Array.isArray(value) && Array.isArray(newValue)) {
    // return value.concat(newValue);
    return newValue.map((val, i) => {
      return replaceValue(value[i], val);
    });
  } else if (isObject(value) && isObject(newValue)) {
    return mergeJSON(value, newValue);
  }
  return newValue;
}

function isObject(obj) {
  return obj && obj.constructor === Object;
}
