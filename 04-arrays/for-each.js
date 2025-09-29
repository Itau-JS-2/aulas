const array = ['a', 'b', 'c', 'd'];

// 1. forEach simples: imprimir cada item com seu índice
array.forEach((item, index) => {
  console.log(`Item: ${item}, Index: ${index}`);
});

// 2. Modificar valores de outro array com forEach
const numbers = [1, 2, 3, 4];
const doubled = [];
numbers.forEach((num) => {
  doubled.push(num * 2);
});
console.log('Doubled numbers:', doubled); // [2, 4, 6, 8]

// 3. Somar todos os números usando forEach
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log('Sum of numbers:', sum); // 10

// 4. Usar forEach para executar uma função para cada item
function greet(name) {
  console.log(`Hello, ${name}!`);
}
array.forEach(greet);

// 5. forEach com objeto e propriedades
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
];
users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old.`);
});
