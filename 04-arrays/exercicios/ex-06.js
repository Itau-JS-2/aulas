const products = [
  { id: 1, name: 'Laptop', price: 1500, stock: 5 },
  { id: 2, name: 'Mouse', price: 25, stock: 50 },
  { id: 3, name: 'Keyboard', price: 75, stock: 10 },
  { id: 4, name: 'Monitor', price: 300, stock: 7 },
  { id: 5, name: 'Headphones', price: 100, stock: 0 },
];

// Achar média
// Map (apenas os nomes dos produtos)
// Filter (filtrar abaixo da média)

const avgStock =
  products.reduce((acc, products) => acc + products.stock, 0) / products.length;

const result = products
  .filter((product) => product.stock < avgStock)
  .map((product) => product.name);

console.log(result);
