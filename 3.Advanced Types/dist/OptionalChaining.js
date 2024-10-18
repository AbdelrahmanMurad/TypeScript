"use strict";
var _a, _b;
const user = {
    profile: {
        name: "John",
        age: 30
    }
};
const userName = user && user.profile && user.profile.name;
console.log(userName);
const userName2 = (_a = user === null || user === void 0 ? void 0 : user.profile) === null || _a === void 0 ? void 0 : _a.name;
console.log(userName2);
const userMethod = {
    greet: () => "Hello!"
};
if (userMethod && userMethod.greet) {
    userMethod.greet();
}
userMethod === null || userMethod === void 0 ? void 0 : userMethod.greet();
const arr = null;
const firstItem = arr && arr[0];
const firstItem2 = arr === null || arr === void 0 ? void 0 : arr[0];
const userA = {
    profile: {
        name: null,
        age: 30
    }
};
console.log((_b = userA === null || userA === void 0 ? void 0 : userA.profile) === null || _b === void 0 ? void 0 : _b.name);
//# sourceMappingURL=OptionalChaining.js.map