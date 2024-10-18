type Customer = {
    birthday: Date;
};

// Function to get customer by ID
// Returns a Customer object, [null, or undefined in case there is no customer in the given id] 
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
let customer2 = getCustomer(1);

// as we know, to check on null & undefined.
if (customer !== null && customer !== undefined) {
    console.log(customer.birthday?.getFullYear());
}

// Now, Using the Optional Property Access Operator (?.) instead of the previus check. [you need to add just the ?]
// This safely accesses the `birthday` property if `customer` is not null or undefined
console.log(customer?.birthday); //undefined
console.log(customer2?.birthday); //birthday

//====================================================================

//lets take this to the next level => make the birthday property object optional.
type CustomerEx2 = {
    birthday?: Date;
}

function getCustomerEx2(id: number): CustomerEx2 | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customerEx2 = getCustomerEx2(0); // no customer
let _customerEx2 = getCustomerEx2(1);

//lets say we want to print the full year of the birth year.
// now depending on birthday property is optional, so it might be possibly undefined. so we use Optional Property Access Operator (?.)
// console.log(customerEx2?.birthday.getFullYear()); // error
console.log(customerEx2?.birthday?.getFullYear()); // undefined
console.log(_customerEx2?.birthday?.getFullYear()); // year

//====================================================================

// Optional Call Operator
let log: any = null;
// console.log(log('a')); // it will crash, because it is initialy null.
// so we need to do checks on null. [instead of that we do (?.))]
console.log(log?.('a'));