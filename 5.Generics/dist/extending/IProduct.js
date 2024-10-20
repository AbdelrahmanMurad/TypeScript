"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() {
        console.log('Compressing items...');
    }
}
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        console.log(category);
        return [];
    }
}
let compressibleStore = new CompressibleStore();
compressibleStore.add({ name: 'Laptop', price: 1000 });
compressibleStore.compress();
let searchableStore = new SearchableStore();
searchableStore.add({ name: 'Phone', price: 500 });
console.log(searchableStore.find('Phone'));
let productStore = new ProductStore();
productStore.add({ name: 'Tablet', price: 300 });
productStore.filterByCategory('Electronics');
//# sourceMappingURL=IProduct.js.map