"use strict";
var _a, _b, _c;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
let customer2 = getCustomer(1);
if (customer !== null && customer !== undefined) {
    console.log((_a = customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
}
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log(customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday);
function getCustomerEx2(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customerEx2 = getCustomerEx2(0);
let _customerEx2 = getCustomerEx2(1);
console.log((_b = customerEx2 === null || customerEx2 === void 0 ? void 0 : customerEx2.birthday) === null || _b === void 0 ? void 0 : _b.getFullYear());
console.log((_c = _customerEx2 === null || _customerEx2 === void 0 ? void 0 : _customerEx2.birthday) === null || _c === void 0 ? void 0 : _c.getFullYear());
let log = null;
console.log(log === null || log === void 0 ? void 0 : log('a'));
//# sourceMappingURL=OptionalChaining2.js.map