const ages: number[] = [];
let gameBoard: string[][] = [];

type Product = {
  name: string;
  price: number;
};

function getTotal(products: Product[]): number {
  //   let total = 0;
  //   for (let product of products) {
  //     total += product.price;
  //   }
  //   return total;
  return products.reduce((acc, value): number => {
    return (acc += value.price);
  }, 0);
}

let productOne: Product = { name: 'Chair', price: 10 };
let productTwo: Product = { name: 'Sofa', price: 20 };
let productThree: Product = { name: 'Sofa', price: 50 };

console.log(getTotal([productOne, productTwo, productThree]));
