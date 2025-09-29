console.log('\n# Limites de Arrays');

// Acessar o primeiro item
const vazio = [];
console.log('Primeiro item (vazio):', vazio[0]); // undefined

// Verificar se array está vazio
console.log('Está vazio?', vazio.length === 0); // true

// Acessar o último item
const numeros = [10, 20, 30, 40];
const ultimo = numeros[numeros.length - 1];
console.log('Último item:', ultimo); // 40

// Métodos que retornam -1 se não encontram
console.log(
  '\nindexOf("banana") em [apple, orange]:',
  ['apple', 'orange'].indexOf('banana')
); // -1

// Criando array esparso ao definir índice além do tamanho
const array = [1, 2, 3, 4, 5];
array[10] = 10;
console.log('\nArray esparso:', array); // [1, 2, 3, 4, 5, <5 empty items>, 10]
console.log('Length:', array.length); // 11

// Reduzir o tamanho do array
array.length = 5;
console.log('\nApós reduzir length para 5:', array); // [1, 2, 3, 4, 5]
