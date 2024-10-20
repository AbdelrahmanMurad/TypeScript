// class KeyValuePair<T> {} // => T or any name we want. T is the famous shortcut because T stands for Template Classes from C++.
// again the naming is optinal.

class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) { }
}

let pair = new KeyValuePair<string, string>('1', 'a');
let pair2 = new KeyValuePair<number, string>(2, 'a');
//you can make hundreds of objects. [easy man :)]
// pair.key.