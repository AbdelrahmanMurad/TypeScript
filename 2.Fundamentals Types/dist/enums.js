"use strict";
const small = 1;
const medium = 2;
const large = 3;
console.log(1);
let mySize = 3;
console.log(mySize);
var variables;
(function (variables) {
    variables["name"] = "Murad";
    variables["email"] = "email@gmail.com";
})(variables || (variables = {}));
;
console.log(variables.email);
//# sourceMappingURL=enums.js.map