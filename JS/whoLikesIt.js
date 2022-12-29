"use strict";
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = void 0;
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
const likes = (a) => {
    const stringLength = a.length;
    let response = '';
    if (stringLength === 0) {
        response = 'no one likes this';
        return response;
    }
    if (stringLength === 1) {
        response = `${a[0]} likes this`;
        return response;
    }
    if (stringLength === 2) {
        response = `${a[0]} and ${a[1]} like this`;
        return response;
    }
    if (stringLength === 3) {
        response = `${a[0]}, ${a[1]} and ${a[2]} like this`;
        return response;
    }
    if (stringLength >= 4) {
        const others = stringLength - 2;
        response = `${a[0]}, ${a[1]} and ${others} others like this`;
        return response;
    }
    return response;
};
exports.likes = likes;
