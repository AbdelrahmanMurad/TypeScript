"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogMethod(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`The method ${key} was called with arguments:`, args);
        console.log(target + ' - to avoid the yellow warning');
        return originalMethod.apply(this, args);
    };
}
class Calculator {
    multiply(a, b) {
        console.log('result = ' + a * b);
        return a * b;
    }
}
__decorate([
    LogMethod
], Calculator.prototype, "multiply", null);
const calc = new Calculator();
calc.multiply(2, 3);
//# sourceMappingURL=D-Method.js.map