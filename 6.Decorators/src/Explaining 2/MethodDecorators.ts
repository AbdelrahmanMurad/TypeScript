// To apply a Decorator to a method, we need three different types of arguments:
// 1- The object that owns the target method. [we use `any` in this case]
// 2- The name of the target method.
// 3- The descriptor object for the target method.

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    // We get a reference to the original method
    const original = descriptor.value as Function;

    // Then, we redefine the method
    descriptor.value = function (...args: any[]) {
        // We have a chance to do something first
        console.log('Before');
        
        // Call the original method
        original.call(this, ...args);

        // And we have a chance to do something after
        console.log('After');
    };

    // To avoid yellow warning
    console.log(`${target} - to avoid the yellow warning`);
    console.log(`${methodName} - to avoid the yellow warning`);
}

// to make it generic we use the spread operator with type any
// arrow functions can not be used as method in class, becuase they don't define their own this keyword, so we should use the function expressin when we are re-defining a method

class Person {
    @Log
    say(message: string) {
        console.log('Person says: ' + message);
    }
}