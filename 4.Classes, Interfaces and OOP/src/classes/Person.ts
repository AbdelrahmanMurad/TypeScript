class Person {
    constructor(public id: number, public firstName: string, public lastName: string) { }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    walk(): string {
        return `${this.fullName} is walking.`;
    }
}

class Student extends Person {
    constructor(id: number, firstName: string, lastName: string, public nOfCourses: number,) {
        super(id, firstName, lastName);
    }

    override get fullName(): string {
        return `Student: ${super.fullName}`;
    }

    study(): string {
        return `${this.fullName} is studying.`;
    }
}

class Teacher extends Person {
    constructor(id: number, firstName: string, lastName: string, public salary1H: number) {
        super(id, firstName, lastName);
    }

    override get fullName(): string {
        return `Teacher: ${super.fullName}`;
    }

    teach(): string {
        return `${this.fullName} is teaching.`;
    }
}

class Manager extends Person {
    constructor(id: number, firstName: string, lastName: string, public yearsOfManeging: number) {
        super(id, firstName, lastName);
    }

    override get fullName(): string {
        return `Manager: ${super.fullName}`
    }

    boss(): string {
        return `${this.fullName} is the Boss.`
    }
}

function printAllNames(people: Person[]) {
    for (let person of people) {
        console.log(person.fullName);
    }
}

//polymorphism
printAllNames([
    new Student(1_2024_555, "Abdelrahman", "Murad", 5),
    new Student(1_2024_666, "Mohammed", "Abo Sada", 4),
    new Teacher(11_2024_111, "Mosh", "Hamedani", 100),
    new Teacher(11_2024_222, "Andrie", "Andrie", 150),
    new Manager(11_2024_333, "John", "Doe", 20)  // Manager is a subclass of Person, so it can be used in this array as well.
]);
console.log("-----------------------------");
let student1 = new Student(1_2024_555, "Abdelrahman", "Murad", 5);
let student2 = new Student(1_2024_666, "Mohammed", "Abo Sada", 4);
let teacher1 = new Teacher(11_2024_111, "Mosh", "Hamedani", 100);
let teacher2 = new Teacher(11_2024_222, "Andrie", "Andrie", 150);
let manager = new Manager(11_2024_333, "John", "Doe", 20);
printAllNames([student1, student2, teacher1, teacher2, manager]);
console.log("-----------------------------");
console.log(manager.boss());

/*
let student = new Student(2, 'Abdelrahman', 'Murad');
console.log(student.id);            
console.log(student.fullName);      
console.log(student.study());       
console.log(student.walk());        
console.log('-------------');

let teacher = new Teacher(5, 'Mosh', 'Hamedani');
console.log(teacher.id);            
console.log(teacher.fullName);      
console.log(teacher.teach());       
console.log(teacher.walk());        
*/