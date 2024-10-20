/*
interface IProduct {
    name: string;
    price: number;
}

// Scenario:
// What if somewhere in our application, we need a product with readonly properties?
// Option 1: Duplicate the interface with readonly properties.
// But duplicating is very repetitive and inefficient.

interface IReadOnlyProduct {
    readonly name: string;
    readonly price: number;
    // Issue: If a new property is added to IProduct, you need to manually add it here and make it readonly.
    // This is tedious and prone to mistakes.
}

// What is the better solution? Option 2: [Type Mapping]
// Use TypeScript's built-in features to handle this more effectively.
*/

interface IProduct {
    name: string;
    price: number;
}

// We can't use interfaces directly for type mapping. 
// Instead, we use TypeScript's `type` keyword and Index Signature syntax to dynamically add properties.

// Type Mapping: Create a type with readonly properties by iterating over the properties of IProduct using the `keyof` operator.
type IReadOnlyProduct = {
    // We will use IndexSignature syntax to dynamiclly add properties => instead of hard coding by adding these properties here and add readonly.
    // We will use keyof operator to dynamiclly get the properties of product Type  
    readonly [Property in keyof IProduct]: IProduct[Property];
    // Explanation:
    // - `Property in keyof IProduct`: This acts like a loop over the properties of IProduct.
    //    The first iteration is for 'name', and the second for 'price', etc.

    // - `IProduct[Property]`: This accesses the value type of each property.
    //    If `Property` is 'name', it returns `string`.
    //    If `Property` is 'price', it returns `number`.

    // - Naming convention is flexible:
    //   readonly [P in keyof IProduct]: IProduct[P];
    //   readonly [K in keyof IProduct]: IProduct[K];
}

// Now, all properties of IProduct are made readonly.
let product: IReadOnlyProduct = {
    name: "Apple",
    price: 10
};

// Error: The following line will produce a compilation error, as the properties are read-only.
// product.name = "Orange"; // Cannot assign to 'name' because it is a read-only property.ts(2540)

// ====================================
// Cleaner Example

interface IPersons {
    name: string;
    age: number;
}

// Type Mapping to create a readonly product type
type IReadOnlyPersons = {
    readonly [P in keyof IPersons]: IPersons[P];
};

let persons: IReadOnlyPersons = {
    name: "Murad",
    age: 23
};

// We've merged the usage of the `keyof` operator with index signature syntax
// to perform type mapping, which prevents redundancy and simplifies creating
// new types based on existing ones.

/*
// We can use generics with type mapping because it allows us to apply type mapping to multiple objects, 
// not just IProduct. This enhances reusability.

interface IProduct {
    name: string;
    price: number;
}

// Using Generics with Type Mapping

// Type to make all properties of an object readonly.
type IReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};

// Type to make all properties optional.
type Optional<T> = {
    [K in keyof T]?: T[K];
};

// Type to allow null values for all properties.
type Nullable<T> = {
    [K in keyof T]: T[K] | null;
};

// Example usage: IReadOnly applied to IProduct.
let product: IReadOnly<IProduct> = {
    name: "Apple",
    price: 10
};

// We can also use `Optional<IProduct>` or `Nullable<IProduct>` depending on the need.


If you want to know more about using Generics with Type Mapping:
https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype
*/