const massiveNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const massiveLength = massiveNumber.length;

let sum = massiveNumber.reduce(add, 0);

function add(accumulator, a) {
  return accumulator + a;
}

const dimension = sum / massiveLength;

console.log(dimension);

const person = [
  {
    name: "Beqa",
    age: 17,
    heightInCm: 171,
  },
  {
    name: "Jaba",
    age: 21,
    heightInCm: 190,
  },
  {
    name: "Jemali",
    age: 26,
    heightInCm: 165,
  },
  {
    name: "giorgi",
    age: 19,
    heightInCm: 175,
  },
  {
    name: "Ednari",
    age: 51,
    heightInCm: 160,
  },
  {
    name: "nika",
    age: 15,
    heightInCm: 155,
  },
];
console.log(person);

const productName = {
  productTitle: "Samsung S21",
  productDescription: "New",
  productPrice: 600,
  shopAddresses: "Batumi Chavchavadze St",
  productStorage: 126,
  productResolution: "400px",
  productColor: "Black",
};
const productName1 = {
  productTitle: "Iphone 13 pro",
  productDescription: "New",
  productPrice: 1000,
  shopAddresses: " Batumi Tabidzis ST",
  productStorage: 256,
  productResolution: "350px",
  productColor: "Green",
};

console.log("Product name is", productName["productTitle"]);
console.log("Product price is", productName["productPrice"]);
console.log("Product resolution is", productName["productResolution"]);
console.log("And you can buy it, at", productName["shopAddresses"]);

console.log("second Product name is", productName1["productTitle"]);
console.log("Product price is", productName1["productPrice"]);
console.log("Product resolution is", productName1["productResolution"]);
console.log("And you can buy it, at", productName1["shopAddresses"]);
