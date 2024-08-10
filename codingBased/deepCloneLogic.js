

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // Create a new array or object to hold the cloned values
  const clone = Array.isArray(obj) ? [] : {};
  // Recursively copy each property or element
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}


const obj = {
  a: 10,
  b: {c:20},
  
};

const clonedObj = JSON.parse(JSON.stringify(obj));
const clonedObj2 = deepClone(obj);

console.log(clonedObj)
console.log(clonedObj2)

//both giving same result
