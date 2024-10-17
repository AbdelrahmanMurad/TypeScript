// Function with inferred return type
function _calculateTax(income: number) {
    // Hover the mouse over the function, and you will see the return type is inferred as void.
    if (income < 50_000)
        income *= 1.2;
}

// Function with different return types
function __calculateTax(income: number) {
    if (income < 50_000)
        income *= 1.2;
    // return 0;   // Hover over: TypeScript infers the return type as 'number'.
    // return true;   // Hover over: TypeScript infers the return type as 'boolean'.
    // return "";   // Hover over: TypeScript infers the return type as 'string'.
}

// Best practice: Explicitly annotate the function return type, especially when dealing with APIs.
function calculateTaxAnnotated(income: number): number {
    if (income < 50_000)
        income *= 1.2;
    return 0;  // The return type is explicitly set to 'number'.
    // return ""; //Error
}

// Use 'void' if you are not returning any value.
function calculateTax(income: number): void {
    if (income < 50_000)
        income *= 1.2;
    // Perform operations...
}

/*
What is the benefit of return type annotations?
- If you return a value different from the annotated type, the TypeScript compiler will catch the error.
*/

function calculateTax_(income: number): number {
    if (income < 50_000)
        return income * 1.2;

    // JavaScript, by default, returns undefined if no return statement is provided.
    // TypeScript compiler flags this as an issue, so you need to explicitly return a value.
    return income * 1.3;
}

/*
Some edits on settings [tsconfig.json]
Type Checking Options
 "noUnusedLocals": true,   // Show a warning when there is an unused variable in a function.
 "noUnusedParameters": true,   // Show a warning when there is an unused argument in a function.
 "noImplicitReturns": true,   // Show a warning when a function has implicit return types (not explicitly determined/not annotated).
*/

function calculateTax__(income: number, taxYear: number): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

// In JavaScript, if you pass more than the expected number of arguments, it will still work.
// However, TypeScript is more strict about this and will throw an error if you exceed the specified parameters.
// calculateTax(10_000, 2023, 2);
calculateTax__(10_000, 2023);


function _calculateTax_(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

_calculateTax_(10_000, 2023); // Passing both income and taxYear.
_calculateTax_(10_000);       // taxYear is optional; defaults to 2022.








/* Its better to avoid this way
The ? symbol in TypeScript is used to mark a parameter as optional. 
Here’s how you can modify your example using the ? symbol to make taxYear optional:
*/
function calculateTaxOptinal(income: number, taxYear?: number): number {
    // If taxYear is not provided, default to 2022
    if (taxYear && taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTaxOptinal(10_000, 2023); // Passing both income and taxYear.
calculateTaxOptinal(10_000);       // taxYear is optional; it will behave as if taxYear is undefined.




/*
You cannot use both a default value and the ? symbol for the same parameter.
Here’s why:
    - If you use a default value, the parameter is already considered optional because the function will use the default value if no argument is passed.
        - you can make a default value in if-statment like the previus example.
    - The ? symbol marks a parameter as optional but does not assign a default value. It's either provided or remains undefined.
*/



/*
**Best Practice:** Always properly annotate your functions, including all parameters and return types. And enable the relevant settings in `tsconfig.json` to ensure TypeScript's strict type checking:

Example options:

- "noUnusedLocals": true
- "noUnusedParameters": true
- "noImplicitReturns": true
- "strict": true,
*/