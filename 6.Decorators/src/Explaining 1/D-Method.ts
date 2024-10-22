function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    // Here whare we change
    const originalMethod = descriptor.value;

    //dont pay attention to much here.
    descriptor.value = function (...args: any[]) {
        console.log(`The method ${key} was called with arguments:`, args);
        console.log(target + ' - to avoid the yellow warning'); // to avoid the yellow warning
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @LogMethod // $ This is how we call a Decorator
    multiply(a: number, b: number): number {
        console.log('result = ' + a * b);
        return a * b;
    }
}

const calc = new Calculator();
calc.multiply(2, 3); // Will print the arguments before computing the result