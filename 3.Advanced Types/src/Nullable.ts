// Null and undefined are common sources of bugs in applications.
// TypeScript enforces strict checks to help prevent these issues.

// The `strictNullChecks` setting in the `tsconfig.json` should be enabled to catch such errors.
// It ensures that variables cannot contain `null` or `undefined` unless explicitly allowed.

// Example: Use a union type to explicitly allow `null` and `undefined` as valid values for the parameter.
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log('Hola');
    }
}

// Calling the function with `undefined`
greet(undefined);  // In JS, this feature not exist. =>  Output: "Hola"

// If the `name` argument is not declared as accepting `null` or `undefined`,
// TypeScript's strict mode will throw an error, ensuring safer code.
// like this: 
let greet2 = (name: string): string => {
    return name;
}
// greet2(null); // uncomment and you will see the error
// greet2(undefined); // uncomment and you will see the error

// Ensure that the following setting is enabled in the `tsconfig.json` file:
// "strictNullChecks": true
// This will catch potential bugs caused by null and undefined values.