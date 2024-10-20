"use strict";
class Stores {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
let store = new Stores();
store.add({ name: "item1", price: 20 });
store.add({ name: "item2", price: 30 });
store.find('name', 'item1');
store.find('price', 20);
//# sourceMappingURL=IProducts.js.map