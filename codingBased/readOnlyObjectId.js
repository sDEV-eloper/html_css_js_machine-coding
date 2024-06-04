//Make id read only
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 12345
};

Object.defineProperty(person, 'id',{
    writable:false,
    configurable:false //prevent from deletion
})

person.id=15;
console.log(person.id) //12345


//For multiple property
for (const prop of ['id', 'firstName']) {
    Object.defineProperty(person, prop, {
      value: person[prop], // Use bracket notation for dynamic property access
      writable: false,
      configurable: false // Prevent deletion (optional)
    });
  }
  
  person.firstName = "Suraj"; // This will now throw an error because name is read-only
  
  console.log(person); 


//   Key Points:
// for...in for property keys (objects)
// for...of for element values (iterables like arrays)
// syntax to delete property: delete propertyName 
// Object.defineProperty() provides fine-grained control over property behavior.
// Consider using private variables with getters and setters for data encapsulation and validation.
