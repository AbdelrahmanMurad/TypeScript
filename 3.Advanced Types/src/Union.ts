// Union Type to combine types. [used for parameters]

// Union types allow a function to accept more than one type of input.
// union type => number | string
function kgToLbs(weight: number | string): number {
    // When accessing 'weight', TypeScript only provides methods common to both numbers and strings.
    // We use narrowing to handle each type appropriately.
    if (typeof weight === 'number') {
        // If 'weight' is a number, multiply by 2.2 to convert kg to lbs.
        return weight * 2.2;
    } else {
        // If 'weight' is a string, first parse it to a number, then convert to lbs.
        return parseInt(weight) * 2.2;
    }
}

// Example calls:
kgToLbs(10);    // Works for numbers.
kgToLbs('10kg'); // Parses the string before converting.

// Important: When you compile this TypeScript code, you will notice that
// JavaScript doesn't support union types natively. This is a TypeScript feature.
// After compilation, the resulting JavaScript will not have the type safety that TS provides. Try it :)