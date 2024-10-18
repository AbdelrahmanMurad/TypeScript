// Using the `never` type in TypeScript [it is not something that we use it that often]

// Example 1: Infinite Loop
function processEvents(): never {
    while (true) {
      // Read a message from a queue or whatever you want
    }
  }
  
  processEvents(); // Infinite loop
//   console.log("Hello, I am unreachable code"); // This line is unreachable
  
  // Note:
  // If we don't use the `never` type, the compiler infers the return type as `void`,
  // and the line will not be grayed out. By using `never`, the line becomes grayed.
  
  // To let the compiler show errors for unreachable code, enable the following setting in your tsconfig.json:
  // {
  //   "compilerOptions": {
  //     "allowUnreachableCode": false [make it false]
  //   }
  // }
  
  // Example 2: Throwing an Error
  function reject(message: string): never {
    throw new Error(message); // This function will never return; it always throws an error
  }
  
//   reject("An error occurred!"); // Throws an error
//   console.log('This code is unreachable'); // This line is also unreachable  