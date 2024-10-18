/*
Optional chaining can be tricky at first, but it's a very powerful feature in TypeScript and JavaScript that helps you safely access deeply nested properties or methods without having to check for `null` or `undefined` at each step.
What is Optional Chaining?
Optional chaining (`?.`) allows you to access properties, methods, or elements **only if the preceding object is not `null` or `undefined`**. If the object is `null` or `undefined`, it will return `undefined` instead of throwing an error.
*/

//$ Syntax and Usage Examples
//$ 1. **Accessing Object Properties**
const user = {
    profile: {
        name: "John",
        age: 30
    }
};

// Without optional chaining:
const userName = user && user.profile && user.profile.name;  // This can get messy.
console.log(userName);//john

// With optional chaining:
const userName2 = user?.profile?.name;  // This is cleaner and safer.
console.log(userName2);//john

// If `user` or `user.profile` is `null` or `undefined`, `user?.profile?.name` will safely return `undefined` instead of throwing an error.



//$ 2. **Calling Methods**
const userMethod = {
    greet: () => "Hello!"
};

// Without optional chaining: 
if (userMethod && userMethod.greet) {
    /* what [userMethod && userMethod.greet] means ??
    Check if userMethod is truthy:
    The first part of the condition, userMethod, checks if userMethod is not null, undefined, or any other falsy value (like 0, false, '', etc.).
    Check if userMethod.greet exists:
    The second part, userMethod.greet, ensures that the greet property or method exists on the userMethod object and is not undefined or null.
    */
    userMethod.greet();
}

// With optional chaining: 
userMethod?.greet();  // Calls greet() if user is defined; otherwise does nothing. [Thats a great abbreviation for the if statement]


//$ 3. ** Accessing Array Elements **
const arr: string[] | null = null;

// Without optional chaining:
const firstItem = arr && arr[0];  // This can lead to null checks.

// With optional chaining:
const firstItem2 = arr?.[0];  // Safely tries to access the first item.


/*
### Key Benefits of Optional Chaining:
- ** Safe Property Access **: Avoids runtime errors when trying to access properties or call methods on `null` or`undefined`.
- ** Cleaner Code **: Removes the need for repetitive null / undefined checks. [checks => if statements]
  
### Common Use Cases:
- Accessing data from APIs, where some properties might not always exist.
- Working with objects that may have optional properties.
- Calling methods or accessing array elements where the object might be`null`.
*/

//### Practice Example:
// Try this code and play with changing`user`, `user.profile`, or`user.profile.name` to `null` or `undefined`:

const userA = {
    profile: {
        name: null,
        age: 30
    }
};

console.log(userA?.profile?.name);  // John
//! console.log(userA?.profile?.address?.city);  // undefined (no error) [also there is an error below address]


// This will help you get comfortable using optional chaining in real - world scenarios!