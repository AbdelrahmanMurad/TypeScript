// Enums are a group of constants.

// Example without enum:
const small = 1;
const medium = 2;
const large = 3;

// It's better to group related constants using enums in TypeScript.
// Use PascalCase for enum names. The second item gets the value 2, and so on.
const enum Size { Small = 1, Medium, Large }
console.log(Size.Small);

// For string values, you need to explicitly set a value for each member.
const enum Ordering { First = 'b', Second = 'g', Third = 's' }

// Declaring a variable 'mySize' of type 'Size':
let mySize: Size = Size.Large;
//or
// let mySize = Size.Large;
console.log(mySize); // Outputs: 3

// Try running the code in the terminal using the 'node pathOf_JSFile' command.
// (You will need to transpile the TypeScript code first)

// Note: If you transpile without using `const` on an enum, the generated JavaScript code will be different.
// (Try it to see the difference in code output)
// Don't be intimated about the look of the code.

enum variables { name = "Murad", email = "email@gmail.com" };
console.log(variables.email);