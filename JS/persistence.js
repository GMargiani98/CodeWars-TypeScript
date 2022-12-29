"use strict";
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistence = void 0;
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
function persistence(num) {
    let initialValue = 0;
    let nums = num.toString();
    while (nums.length > 1) {
        initialValue++;
        nums = nums
            .split('')
            .map(Number)
            .reduce((a, b) => a * b)
            .toString();
    }
    return initialValue;
}
exports.persistence = persistence;
