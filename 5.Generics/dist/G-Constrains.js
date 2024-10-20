"use strict";
function echoFunction(value) {
    return value;
}
console.log(echoFunction(100));
console.log(echoFunction("Hello"));
function echoFConstrains(value) {
    return value;
}
console.log(echoFConstrains({ name: "Murad" }));
class Student {
    someMethod() { console.log("Some Operations"); }
}
function echoI(value) {
    return value;
}
console.log(echoI(new Student()));
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
}
function echoClass(value) {
    return value;
}
console.log(echoClass(new Person("Murad")));
console.log(echoClass(new Employee("Murad", "Programing")));
//# sourceMappingURL=G-Constrains.js.map