"use strict";
let hightScore;
hightScore = 2;
hightScore = false;
const stuff = [];
const colors = [];
function greet(name) {
    if (typeof name === 'string') {
        console.log(`Hello, ${name}`);
    }
    else {
        name.forEach((name) => {
            console.log(`Hello, ${name}`);
        });
    }
}
greet('Pedro');
greet(['Lucas', 'Gabriel', 'Jose']);
