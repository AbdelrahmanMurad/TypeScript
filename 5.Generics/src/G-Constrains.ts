// Restrict the echo function to accept just number or string arguments.
function echoFunction<T extends number | string>(value: T): T {
    return value;
}

console.log(echoFunction(100));
console.log(echoFunction("Hello"));
// console.log(echoFunction(true)); // error

// ======================================================

// Restrict the echo function to accept just shape of object argument.
function echoFConstrains<T extends { name: string }>(value: T): T {
    return value;
}

console.log(echoFConstrains({ name: "Murad" })); // accepts only the shape of object.
// console.log(echoFConstrains(100)); // error
// console.log(echoFConstrains("Hello")); // error
// console.log(echoFConstrains(true)); // error

// ======================================================

// Restrict the echo function to accept just Interface argument.
interface IPerson {
    someMethod(): void
}

class Student implements IPerson {
    someMethod(): void { console.log("Some Operations"); }
}

function echoI<T extends IPerson>(value: T): T {
    return value;
}

console.log(echoI(new Student()));

// ======================================================

// Restrict the echo function to accept just Class argument.
class Person {
    constructor(public name: string) { }
}

class Employee extends Person {
    constructor(name: string, public department: string) {
        super(name);
    }
}

function echoClass<T extends Person>(value: T): T {
    return value;
}

console.log(echoClass(new Person("Murad")));
console.log(echoClass(new Employee("Murad", "Programing")));