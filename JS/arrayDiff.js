"use strict";
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayDiff2 = exports.arrayDiff = void 0;
// It should remove all values from list a, which are present in list b keeping their order.
// array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
// If a value is present in b, all of its occurrences must be removed from the other:
// array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)
const arrayDiff = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                a.splice(i, 1);
            }
            for (let t = 0; t < a.length; t++) {
                if (a[t] === b[j]) {
                    a.splice(t, 1);
                }
            }
        }
    }
    return a;
};
exports.arrayDiff = arrayDiff;
const arrayDiff2 = (a, b) => a.filter((x) => !b.includes(x));
exports.arrayDiff2 = arrayDiff2;
