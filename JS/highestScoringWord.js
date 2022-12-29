"use strict";
// Given a string of words, you need to find the highest scoring word.
Object.defineProperty(exports, "__esModule", { value: true });
exports.high = void 0;
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.
const high = (str) => {
    let as = str
        .split(' ')
        .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    return str.split(' ')[as.indexOf(Math.max(...as))];
};
exports.high = high;
