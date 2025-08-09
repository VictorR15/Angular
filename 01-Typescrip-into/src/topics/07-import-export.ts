import { taxCalculation, Product } from "./06-funtion-destructuring";

const shoppingCart: Product[] = [
  {
    descripcion: "Nokia",
    price: 100,
  },
  {
    descripcion: "iPad",
    price: 150,
  },
];

const [total, tax] = taxCalculation({
  products: shoppingCart,
  tax: 0.15,
});

console.log("Tatal", total);
console.log("Tax", tax);
