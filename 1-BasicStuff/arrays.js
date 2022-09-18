"use strict";
const ages = [];
let gameBoard = [];
function getTotal(products) {
    //   let total = 0;
    //   for (let product of products) {
    //     total += product.price;
    //   }
    //   return total;
    return products.reduce((acc, value) => {
        return (acc += value.price);
    }, 0);
}
let productOne = { name: 'Chair', price: 10 };
let productTwo = { name: 'Sofa', price: 20 };
let productThree = { name: 'Sofa', price: 50 };
console.log(getTotal([productOne, productTwo, productThree]));
