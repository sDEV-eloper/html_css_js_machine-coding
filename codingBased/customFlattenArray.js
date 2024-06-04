const arr = [1, [2, [3, 4], 5], 6, [7, [8, 9]]];


function flattenArray(arr) {
    let result = [];
    
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element)); // Recursively flatten the nested array
        } else {
            result.push(element); // If it's not an array, push the element to the result
        }
    });
    
    return result;
}
console.log(flattenArray(arr))

