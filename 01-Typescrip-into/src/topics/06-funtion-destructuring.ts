export interface Product {
  descripcion: string;
  price: number;
}

const phone: Product = {
  descripcion: "Nokia A1",
  price: 150.0,
};
const tablet: Product = {
  descripcion: "iPad Air",
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

// function taxCalculation(options: TaxCalculationOptions): number[] {
// function taxCalculation({ tax, products }: TaxCalculationOptions): number[] {
export function taxCalculation(options: TaxCalculationOptions): number[] {
  const { tax, products } = options;
  let total: number = 0;

  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
  products: shoppingCart,
  tax,
});

console.log(`Total ${total} and tax: ${totalTax}`);
