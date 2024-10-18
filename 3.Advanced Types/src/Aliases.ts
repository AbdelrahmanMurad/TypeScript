// Type Aliases to reuse types and simplifies your code.

// This is the old example of how we use objects in TypeScript.
let employee: {
    readonly id: number,          // 'id' cannot be changed once assigned.
    name: string,                 // 'name' is a string.
    retire: (date: Date) => void  // 'retire' is a method that accepts a Date and returns void.
} = {
    id: 1,
    name: 'Muhamed',
    retire: (date: Date) => {
        console.log(date);         // Logs the date to the console.
    }
};

// This structure presents three problems:
// 1. For every employee object, we will repeat the same structure, making it overly complicated.
//    This violates the DRY (Don't Repeat Yourself) principle.
// 2. Other employee objects may have different properties, requiring adjustments to each object.
// 3. It becomes hard to read and manage as the object grows in complexity.

// This is where **type aliases** come in to solve these issues.
// Here is how you can use Aliases to simplify your structure.
// PascalCase naming convention is used for type aliases.
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee1: Employee = {
    id: 1,
    name: 'Muhamed',
    retire: (date: Date) => {
        console.log(date);
    }
}

//Why Aliases? Using type aliases simplifies the structure, improves readability, and adheres to the DRY principle. You can now reuse the Employee type across multiple instances without redefining the object structure every time.