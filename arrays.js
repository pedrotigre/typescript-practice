"use strict";
const ages = [];
let gameBoard = [];
function getTotal(products) {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total;
}
let productOne = { name: 'Chair', price: 10 };
let productTwo = { name: 'Sofa', price: 20 };
console.log(getTotal([productOne, productTwo]));
