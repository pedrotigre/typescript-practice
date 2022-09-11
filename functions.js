"use strict";
const twoFew = (name = 'you') => {
    return `one for ${name}, one for me`;
};
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
        ? true
        : false;
};
console.log(twoFew());
console.log(twoFew('Pedro'));
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
