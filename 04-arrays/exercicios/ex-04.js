const clients = [
  { id: 1, name: 'Frank', orders: [10, 60, 120] },
  { id: 2, name: 'Grace', orders: [45, 55, 65] },
  { id: 3, name: 'Hannah', orders: [30, 20, 10] },
  { id: 4, name: 'Ian', orders: [100, 200] },
];

// 1. Filtrar clientes com pelo menos um pedido acima de R$ 50
// 2. Mapear apenas os nomes em um array

const result = clients
  .filter((client) => client.orders.some((order) => order > 50))
  .map((client) => client.name);

console.log(result);
