"use strict";
function _calculateTax(income) {
    if (income < 50000)
        income *= 1.2;
}
function __calculateTax(income) {
    if (income < 50000)
        income *= 1.2;
}
function calculateTaxAnnotated(income) {
    if (income < 50000)
        income *= 1.2;
    return 0;
}
function calculateTax(income) {
    if (income < 50000)
        income *= 1.2;
}
function calculateTax_(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
function calculateTax__(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax__(10000, 2023);
function _calculateTax_(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
_calculateTax_(10000, 2023);
_calculateTax_(10000);
function calculateTaxOptinal(income, taxYear) {
    if (taxYear && taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTaxOptinal(10000, 2023);
calculateTaxOptinal(10000);
//# sourceMappingURL=functions.js.map