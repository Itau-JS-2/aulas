const numbers = [1, 2, 3, 4, 5];

// 1. Somar todos os números do array
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum:', sum); // 15

// 2. Multiplicar todos os números do array
const product = numbers.reduce(
  (accumulator, current) => accumulator * current,
  1
);
console.log('Product:', product); // 120

// 3. Encontrar o maior número do array
const max = numbers.reduce(
  (accumulator, current) => (current > accumulator ? current : accumulator),
  numbers[0]
);
console.log('Max:', max); // 5

// 4. Contar a ocorrência de cada letra em um array
const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
const countLetters = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log('Count letters:', countLetters); // { a: 3, b: 2, c: 1 }

// 5. Concatenar todos os nomes de um array de objetos em uma string
const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Carol' }];
const allNames = users.reduce((acc, user) => acc + user.name + ' ', '');
console.log('All names:', allNames.trim()); // "Alice Bob Carol"
