/*
// Define the interface for products with 'name' and 'price' properties.
interface IProduct {
    name: string;
    price: number;
}

// Generic Store class to manage any type of objects.
class Stores<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }

    // Method to find objects in the store by a specific property and value.
    find(property: string, value: unknown): T | undefined {
        // value: unknown => because value can be anything (unknown instead of any)
        return this._objects.find(obj => obj[property] === value);
        // Error: TS compiler thinks obj[property] is an index signature.
    }
}

// Instantiate a new store for products.
let store = new Stores<IProduct>();

// Add two products to the store.
store.add({ name: "item1", price: 20 });
store.add({ name: "item2", price: 30 });

// Try finding objects by 'name' or 'price' properties.
store.find('name', 'item1'); // Find the first product (name = "item1")
store.find('price', 20); // Find the second product (price = 20)

// Try to find using a non-existing property.
store.find('nonExistingProperty', 1);
// This will cause a crash at runtime because 'nonExistingProperty' doesn't exist in the IProduct interface. [try it and run the program]

// To fix this:
// - We need to fix the index signature issue.
// - Add compile-time checks to ensure 'nonExistingProperty' errors out and doesn't crash the program. [compile time error]
// - How ???
*/

interface IProduct {
    name: string;
    price: number;
}

class Stores<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }

    //just add [keyof T] instead of [string] and the problems will be solved.
    //so, T is IProduct
    // keyof T => 'name' | 'price'
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value);
    }
}

// Instantiate a new store for products.
let store = new Stores<IProduct>();

// Add two products to the store.
store.add({ name: "item1", price: 20 });
store.add({ name: "item2", price: 30 });

// Try finding objects by 'name' or 'price' properties.
store.find('name', 'item1'); // Find the first product (name = "item1")
store.find('price', 20); // Find the second product (price = 20)

// store.find('nonExistingProperty', 1); // compile time error [can be fixed before running the program]