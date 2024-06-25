const obj = {
  a: 1,
  b: {
    c: 2,
  },
  d: {
    e: {
      f: 3,
    },
  },
};

function flattenObject(obj, parentKey = '', result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey ? `${parentKey}_${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

const flattenedObj = flattenObject(obj);
console.log(flattenedObj);

//OUTPUT
//  { a: 1, 
//    b_c: 2, 
//    d_e_f: 3 
// }

