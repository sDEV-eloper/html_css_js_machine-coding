
//Custom filter method
Array.prototype.customFilter = function(callback) {
  const result = []; 
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result; 
};
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.customFilter((number)=> number > 2);
console.log(evenNumbers); 


//Custom Map method
Array.prototype.myMap=function(callback){
 const result2 = []; 
  for (let i = 0; i < this.length; i++) {
      result2.push(callback(this[i]));
  }
  return result2; 
};
const evenNumbers2 = numbers.myMap((number)=> number * 5);
console.log(evenNumbers2);
