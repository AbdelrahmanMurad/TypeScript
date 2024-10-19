"use strict";
class Person {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        return `${this.fullName} is walking.`;
    }
}
class Student extends Person {
    constructor(id, firstName, lastName, nOfCourses) {
        super(id, firstName, lastName);
        this.nOfCourses = nOfCourses;
    }
    get fullName() {
        return `Student: ${super.fullName}`;
    }
    study() {
        return `${this.fullName} is studying.`;
    }
}
class Teacher extends Person {
    constructor(id, firstName, lastName, salary1H) {
        super(id, firstName, lastName);
        this.salary1H = salary1H;
    }
    get fullName() {
        return `Teacher: ${super.fullName}`;
    }
    teach() {
        return `${this.fullName} is teaching.`;
    }
}
class Manager extends Person {
    constructor(id, firstName, lastName, yearsOfManeging) {
        super(id, firstName, lastName);
        this.yearsOfManeging = yearsOfManeging;
    }
    get fullName() {
        return `Manager: ${super.fullName}`;
    }
    boss() {
        return `${this.fullName} is the Boss.`;
    }
}
function printAllNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printAllNames([
    new Student(12024555, "Abdelrahman", "Murad", 5),
    new Student(12024666, "Mohammed", "Abo Sada", 4),
    new Teacher(112024111, "Mosh", "Hamedani", 100),
    new Teacher(112024222, "Andrie", "Andrie", 150),
    new Manager(112024333, "John", "Doe", 20)
]);
console.log("-----------------------------");
let student1 = new Student(12024555, "Abdelrahman", "Murad", 5);
let student2 = new Student(12024666, "Mohammed", "Abo Sada", 4);
let teacher1 = new Teacher(112024111, "Mosh", "Hamedani", 100);
let teacher2 = new Teacher(112024222, "Andrie", "Andrie", 150);
let manager = new Manager(112024333, "John", "Doe", 20);
printAllNames([student1, student2, teacher1, teacher2, manager]);
console.log("-----------------------------");
console.log(manager.boss());
//# sourceMappingURL=Person.js.map