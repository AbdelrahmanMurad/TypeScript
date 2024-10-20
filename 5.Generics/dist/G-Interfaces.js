"use strict";
var _a, _b;
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
let result1 = fetch('https://mywebsite.com/users');
let result2 = fetch('https://mywebsite.com/products');
(_a = result1.data) === null || _a === void 0 ? void 0 : _a.username;
(_b = result2.data) === null || _b === void 0 ? void 0 : _b.title;
//# sourceMappingURL=G-Interfaces.js.map