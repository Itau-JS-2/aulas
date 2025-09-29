## Exercícios de composição

```jsx
const users = [
  { id: 1, name: 'Alice', age: 25, active: true, orders: [120, 50, 30] },
  { id: 2, name: 'Bob', age: 32, active: false, orders: [10, 20, 15] },
  { id: 3, name: 'Carol', age: 28, active: true, orders: [60, 80] },
  { id: 4, name: 'David', age: 22, active: true, orders: [25] },
  { id: 5, name: 'Eve', age: 35, active: false, orders: [200, 150] },
];

const clients = [
  { id: 1, name: 'Frank', orders: [10, 60, 120] },
  { id: 2, name: 'Grace', orders: [45, 55, 65] },
  { id: 3, name: 'Hannah', orders: [30, 20, 10] },
  { id: 4, name: 'Ian', orders: [100, 200] },
];

const products = [
  { id: 1, name: 'Laptop', price: 1500, stock: 5 },
  { id: 2, name: 'Mouse', price: 25, stock: 50 },
  { id: 3, name: 'Keyboard', price: 75, stock: 10 },
  { id: 4, name: 'Monitor', price: 300, stock: 7 },
  { id: 5, name: 'Headphones', price: 100, stock: 0 },
];
```

1. Retorne um array com os nomes dos usuários que têm pelo menos um pedido acima de R$100.
2. Crie um array com um objeto para cada usuário que contenha seu nome e o total gasto por cada usuário.
3. Crie um array com um objeto para cada produto. O array deve listar os produtos disponíveis em estoque (`quantidade > 0`) e adicionar uma propriedade `discountedPrice` com o preço final após 15% de desconto.
4. Crie um array que tenha todos os nomes de clientes que têm mais de um pedido acima de R$50.
5. Crie um array com os nomes dos usuários ativos que possuem idade entre 20 e 30 anos, em ordem alfabética.
6. Obtenha um array com os nomes dos produtos cujo estoque é menor que a média do estoque de todos os produtos.
7. Crie um array com um objeto para cada usuário que contenha o seu nome e o número total de pedidos que ele realizou acima de R$50 (`highValueOrders`).
8. Retorne a soma total de todos os pedidos acima de R$50 de todos os clientes.
9. Liste os nomes dos usuários ativos e transforme em uma única string separada por vírgulas.
10. Obtenha o produto mais caro disponível em estoque.
