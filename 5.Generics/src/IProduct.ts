// E-commerce Application

// Interface for a product object.
interface IProduct {
    name: string;
    price: number;
}

// Generic Store class to manage collections of objects like products or orders.
class Store<T> {
    // Array to hold objects of type T.
    protected _objects: T[] = []; // or make it private and use get.

    // Method to add an object to the store.
    add(obj: T): void {
        this._objects.push(obj);
    }
}

// Can you extend a generic class? Yes, and here are three approaches:

// 1. Pass the generic type parameter.
//    - The extending class will also be generic, and its type argument will be passed to the base class (Store).
class CompressibleStore<T> extends Store<T> {
    // Method to simulate compressing items in the store.
    compress(): void {
        console.log('Compressing items...');
    }
}

// 2. Restrict the generic type parameter using constraints.
//    - Only objects with a `name` property are allowed.
class SearchableStore<T extends { name: string }> extends Store<T> {
    // Method to find an object in the store by name.
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

// 3. Fix the generic type parameter.
//    - The type parameter is fixed to a specific type (e.g., Product) instead of being generic.
class ProductStore extends Store<IProduct> {
    // Method to filter products by category.
    filterByCategory(category: string): IProduct[] {
        console.log(category); // To prevent the yellow warning.
        return [];
    }
}

// Examples of usage:
let compressibleStore = new CompressibleStore<IProduct>();
compressibleStore.add({ name: 'Laptop', price: 1000 });
compressibleStore.compress();

let searchableStore = new SearchableStore<IProduct>();
searchableStore.add({ name: 'Phone', price: 500 });
console.log(searchableStore.find('Phone'));

let productStore = new ProductStore();
productStore.add({ name: 'Tablet', price: 300 });
productStore.filterByCategory('Electronics');