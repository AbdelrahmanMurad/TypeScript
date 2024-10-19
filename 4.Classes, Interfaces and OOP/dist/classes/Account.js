"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid deposit amount');
        }
        this._balance += amount;
    }
}
let murad = new Account(1, "Murad", 0);
//# sourceMappingURL=Account.js.map