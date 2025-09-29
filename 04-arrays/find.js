const items = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
];

// 1. find: retorna o primeiro item que bate com a condição
const foundItem = items.find((item) => item.name === 'b');
console.log("Found item with name 'b':", foundItem);
// { id: 2, name: 'b' }

// 2. find: retorna undefined se não encontrar
const notFound = items.find((item) => item.name === 'x');
console.log('Result when not found:', notFound);
// undefined

// 3. findIndex: retorna o índice do primeiro item que bate com a condição
const foundIndex = items.findIndex((item) => item.name === 'c');
console.log("Index of item with name 'c':", foundIndex);
// 2

// 4. find: com array de números, encontra o primeiro número par
const numbers = [1, 3, 5, 6, 7];
const firstEven = numbers.find((n) => n % 2 === 0);
console.log('First even number:', firstEven);
// 6

// 5. findIndex: índice do primeiro número maior que 4
const firstGreaterThanFourIndex = numbers.findIndex((n) => n > 4);
console.log('Index of first number > 4:', firstGreaterThanFourIndex);
// 3
