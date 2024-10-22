function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        // We use this variable to hold the value behind the target property. 
        let value: string;
        // We create a descriptor for the target property.
        const descriptor: PropertyDescriptor = {
            // We're defining the setter for the target property.
            get() { return value; } // return the value of the variable
    set(newValue: string) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be atleast ${length} characters long.`);
                value = newValue;
            }
        }
        // And finally, we redefine the property. 
        Object.defineProperty(target, propertyName, descriptor);
    }
}

class User {
    @MinLength(4)
    password: string;
}