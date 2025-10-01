const users = [
  { id: 2, name: 'Bob', age: 32, active: false, orders: [10, 20, 15] },
  { id: 3, name: 'Carol', age: 28, active: true, orders: [60, 80] },
  { id: 4, name: 'David', age: 22, active: true, orders: [25] },
  { id: 5, name: 'Eve', age: 35, active: false, orders: [200, 150] },
  { id: 1, name: 'Alice', age: 25, active: true, orders: [120, 50, 30] },
];

const result = users
  .filter((user) => user.active && user.age >= 20 && user.age <= 30)
  .map((user) => user.name)
  .sort();

console.log(result);
