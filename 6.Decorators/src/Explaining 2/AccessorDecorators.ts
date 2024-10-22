function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        // const result = original!.call(this); // using ! we are telling the compiler: trust me I know this will not be null (على مسؤوليتي)
        const result = original?.call(this); // using ! we are telling the compiler: trust me I know this will not be null (على مسؤوليتي)
        // return 'newResult'; 
        return (typeof result === 'string') ? result.toUpperCase() : result;
    }
    // To avoid yellow warning
    console.log(`${target} - to avoid the yellow warning`);
    console.log(`${methodName} - to avoid the yellow warning`);
}
class Person__ {
    constructor(public firstName: string, public lastName: string) { }
    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
        // return 0;
        // return null;
    }
}

let person = new Person__("Abood", "Murad");
console.log(person.fullName);