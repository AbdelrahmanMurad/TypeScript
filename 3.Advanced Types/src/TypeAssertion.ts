// Type assertion is a mechanism in TypeScript that allows you to tell the compiler about the specific type of a variable when TypeScript's type inference does not infer it correctly. It essentially overrides the type that TypeScript has inferred for that variable, allowing you to treat it as a different type.

// Get the element with id 'phone' from the DOM
let phone = document.getElementById('phone');
// phone.value; // no type inference

// Issue: Without type inference, `phone` is recognized as an HTMLElement,
// which may not have a `value` property (commonly found on input elements).

// To access the `value` property, we need to tell the compiler that
// this element is specifically an HTMLInputElement (which has the `value` attribute).

// Solution: Use Type Assertion to inform the compiler about the specific type.

// Option 1: Using the `as` keyword (preferred method in TypeScript)
let phoneInput = document.getElementById('phone') as HTMLInputElement;
console.log(phoneInput.value);

// Option 2: Using angle-bracket syntax (older style, not recommended in JSX contexts)
let phoneInputAlt = <HTMLInputElement>document.getElementById('phone');
console.log(phoneInputAlt.value);