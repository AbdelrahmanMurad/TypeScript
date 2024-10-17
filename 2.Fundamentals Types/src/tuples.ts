// A tuple is a fixed-length array where each element has a specific type.

let user: [number, string] = [1, 'muhamed']; 
// let user: [number, string] = ['1', 'muhamed']; // Error: '1' is not a number
// let user: [number, string] = [1, 'muhamed', 3]; // Error: Too many elements in the tuple

// In best practice, tuples are typically used for two/three values. [restrict your tuples to a fixed number of values]
// If there are more than two/three, it can be hard to understand.


// Example:
user[0].toFixed(); // This will provide IntelliSense for number-specific methods (e.g., toFixed, toString). [type inference]
user[1].length; // This will provide IntelliSense for string-specific methods (e.g., toUpperCase, toLowerCase). [type inference]



// However, there is a gap in TypeScript [hopefully resolved in the future]:
user.push(1); // This will not immediately throw an error, even though it breaks the fixed-length tuple rule.