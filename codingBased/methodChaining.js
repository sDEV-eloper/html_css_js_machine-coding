function result() {
    let value = 0;

    // Method to add a given number to the current value
    function lacs(num) {
        value += num * 100000; // Convert given number to lacs and add to value
        return this; // Return the current object for method chaining
    }

    // Method to add a given number to the current value
    function hundred(num) {
        value += num * 100; // Convert given number to hundreds and add to value
        return this; // Return the current object for method chaining
    }

    // Method to get the current value
    function getValue() {
        return value;
    }

    // Return an object with methods
    return {
        lacs,
        hundred,
        getValue
    };
}

// Example usage
console.log(result().lacs(15).hundred(5).getValue()); // Output: 1505000
