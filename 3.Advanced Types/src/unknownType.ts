// We use the unknown type instead of any to ensure type safety by forcing the compiler to perform type-checking (also known as type narrowing).

function render(document: unknown) {
    // Type narrowing
    if (typeof document === 'string') {
      // Now the compiler knows that 'document' is of type 'string' (type inference)
      console.log(document.toUpperCase());
    }
  
    // The compiler will raise errors for the following lines if 'document' is of type 'unknown'.
    // However, if we had used 'any', no errors would be raised, which is why we prefer 'unknown'.
    // document.move(); // Error: Property 'move' does not exist on type 'unknown'.
    // document.fly();  // Error: Property 'fly' does not exist on type 'unknown'.
    // document.doWhateverWeWant(); // Error: Property 'doWhateverWeWant' does not exist on type 'unknown'.
  }
  