/*
Literal Types in TS allow you to specify exact values a variable can hold. Instead of just defining a variable as a broader type like 
number or string, you can restrict it to specific values. This feature adds more strictness to your code and can help catch errors at 
compile time.
*/

// Using Literal Types Directly
let quantity: 50 | 100 = 50; // Valid assignment


// Using Type Aliases for Better Readability
type Quantity = 50 | 100; // 'Quantity' can only be 50 or 100
let quantityAlias: Quantity = 50; // Valid assignment


// String Literal Types
type Metric = 'cm' | 'inch'; // 'Metric' can only be 'cm' or 'inch'





// Here’s a simple example demonstrating how you might use these literal types in a function:

function setQuantity(q: Quantity) {
    console.log(`Quantity set to: ${q}`);
}

setQuantity(50); // Valid
setQuantity(100); // Valid
// setQuantity(75); // Error: Argument of type '75' is not assignable to parameter of type 'Quantity'.




/*
**Benefits of Literal Types**

1. **Type Safety**: By restricting variables to specific values, you reduce the chances of errors in your code.
2. **IntelliSense Support**: When you define a variable with a literal type, IDEs can provide better suggestions and autocomplete features since they know the limited set of values the variable can take.
3. **Improved Readability**: Using literal types can make your code more expressive and clearer about the acceptable values.
*/