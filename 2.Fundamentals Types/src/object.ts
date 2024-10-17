// This is valid in JavaScript, but not in TypeScript.
let _employee = { id: 1 };
//! _employee.name = "Murad"; // Error: Property 'name' does not exist on type '{ id: number; }'.
// If you hover over 'employee', you will see its shape as an object with 'id' as a number.



// This is how to properly annotate objects in TypeScript:
let employee_: {
    id: number,
    name: string
} = { id: 1, name: "Jack" };

// Now, the previous error is resolved.
employee_.name = "Murad";
// However, if you try to dynamically add a new property to 'employee' like you would in JavaScript, it will not work in TypeScript.
//! Example: employee.salary = 5000; // This will throw an error because 'salary' was not defined in the type.



// You can initialize 'name' with an empty string:
let employee: {
    id: number,
    name: string
} = { id: 1, name: "" };
employee.name = "Murad";
console.log(employee);
console.log(employee.name);



// You can make the 'name' property optional like this:
let employee__: {
    id: number,
    name?: string
} = { id: 1 }; // 'name' is optional and can be omitted.

// However, avoid using optional properties indiscriminately.
// Don't blindly use features of TypeScript or any other programming languages.
// Avooooooooid unnecessary complexity!



// The 'readonly' modifier is used to mark properties of an object as immutable.
// Once a property is marked as readonly, it cannot be changed after the object is created.

let employeeReadOnly: {
    readonly id: number,  // 'id' cannot be reassigned
    name: string
} = { id: 1, name: "Murad" };

// The following line will cause an error because 'id' is marked as readonly:
//! employeeReadOnly.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.




// Defining a function within an object.
// Here is a 'retire' method for every employee.
// For every function/method in TypeScript, ask yourself the following questions:
// - How many parameters does it take?
// - What is the type of each parameter?
// - What is the return value?

let employeeeeee: {
    readonly id: number,           // 'readonly' ensures 'id' cannot be changed
    name: string,
    retire: (date: Date) => void   // 'retire' is a method that takes a Date parameter and returns void
} = {
    id: 1,
    name: 'Muhamed',
    retire: (date: Date) => {
        console.log(date);         // Logs the retirement date to the console
    }
};

// This implementation does not conform to the DRY (Don't Repeat Yourself) principle.
// If we want to create another employee, we would have to rewrite the same structure again.
// We will solve this issue using advanced types in the next section.