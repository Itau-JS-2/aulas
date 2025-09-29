const products = [
  { id: 1, name: 'Laptop', price: 1500, stock: 5 },
  { id: 2, name: 'Mouse', price: 25, stock: 50 },
  { id: 3, name: 'Keyboard', price: 75, stock: 10 },
  { id: 4, name: 'Monitor', price: 300, stock: 7 },
  { id: 5, name: 'Headphones', price: 100, stock: 0 },
];

const result = products
  .filter((product) => product.stock > 0)
  .map((product) => ({
    ...product,
    discountedPrice: product.price * 0.85,
  }));

console.log(result);
