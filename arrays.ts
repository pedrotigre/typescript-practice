type Product = {
  name: string;
  price: number;
};

const ages: number[] = [];
let gameBoard: string[][] = [];

function getTotal(products: Product[]): number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
}

let productOne: Product = { name: 'Chair', price: 10 };
let productTwo: Product = { name: 'Sofa', price: 20 };

console.log(getTotal([productOne, productTwo]));
