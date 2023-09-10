# Note

1. Nodelist !=Array
2. console.log(Array.from('foo'));  // Expected output: Array ["f", "o", "o"]
3. classList = it is readonly property, used to manipulate the class list.
4. mouseover - event triggers when the mouse pointer enters the div element, and its child elements.
    mouseenter - event is only triggered when the mouse pointer enters the div element.

5. map - when you want to transform elements and create a new array.

 forEach - when you want to iterate over elements for side effects but don't need a new array with transformed values.(not create new array)

Example:
 const arr = [1, 2, 3, 4, 5];
const doubledArr = arr.map((n) => n * 2);
console.log(doubledArr);

const brr = [1, 2, 3, 4, 5];
brr.forEach((n, index, array) => {
  array[index] = n * 2;
});
console.log(brr);




