class Account {

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number
    ) { }

    get balance(): number {
        return this._balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Invalid deposit amount');
        }
        this._balance += amount;
    }
}

let murad = new Account(1, "Murad", 0);