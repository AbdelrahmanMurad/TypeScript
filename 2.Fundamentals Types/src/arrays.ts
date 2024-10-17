// This can be inferred dynamically:
let _numbers = [3, 5, 6]; // ✅ TypeScript infers 'number[]'

// Or you can explicitly annotate the type:
let numbersAnnotated: number[] = [3, 5, 6]; // ✅

// ===========================================================

// This cannot be inferred dynamically, as the array is empty:
let emptyArray = []; // ❌ TypeScript infers 'any[]'

// So, you need to explicitly annotate the type:
let numbers: number[] = []; // ✅










// You benefit from the previos move as the editor knows that 'numbers' or 'n' is an array of numbers, so it provides suggestions for 
// all available properties and methods.
//! numbers.forEach(n => n.); 
// The editor will suggest number-specific methods like 'toFixed', 'toString', etc.

// This feature does not exist in plain JavaScript.
// TypeScript provides type inference* and suggestions that are not available in JavaScript.
//* Type inference is a feature in TypeScript where the compiler automatically deduces the type of a variable based on its value or usage, without needing explicit type annotations.