// Pascall Naming
function LogClass(constructor: Function) {
    // Here whare we change
    console.log("An object of the class was created:", constructor.name);
}

@LogClass // $ This is how we call a Decorator.
class Car {
    constructor() {
        console.log("New car!");
    }
}

const myCar = new Car(); // Will print the class name along with the message => New Car!