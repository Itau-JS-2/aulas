console.log('\n# Adicionando itens com push e unshift');

// push (destrutivo)
let fruits = ['banana', 'pear', 'apple'];
fruits.push('mango');
console.log('push:', fruits); // ['banana', 'pear', 'apple', 'mango']

// unshift (destrutivo)
fruits = ['banana', 'pear', 'apple'];
fruits.unshift('orange');
console.log('unshift:', fruits); // ['orange', 'banana', 'pear', 'apple']

// múltiplos parâmetros
fruits = ['banana', 'pear', 'apple'];
fruits.push('mango', 'orange');
console.log('push múltiplos:', fruits); // ['banana', 'pear', 'apple', 'mango', 'orange']

fruits = ['banana', 'pear', 'apple'];
fruits.unshift('mango', 'orange');
console.log('unshift múltiplos:', fruits); // ['mango', 'orange', 'banana', 'pear', 'apple']

console.log('\n# Removendo itens com pop, shift e splice');

// pop (destrutivo)
fruits = ['banana', 'pear', 'apple'];
const removedPop = fruits.pop(); // 'apple'
console.log('pop:', fruits); // ['banana', 'pear']
console.log('item removido com pop:', removedPop);

// shift (destrutivo)
fruits = ['banana', 'pear', 'apple'];
const removedShift = fruits.shift(); // 'banana'
console.log('shift:', fruits); // ['pear', 'apple']
console.log('item removido com shift:', removedShift);

// splice (destrutivo)
fruits = ['banana', 'pear', 'apple'];
const removedSplice = fruits.splice(2, 1); // remove 'apple'
console.log('splice:', fruits); // ['banana', 'pear']
console.log('item removido com splice:', removedSplice); // ['apple']

console.log('\n# Copiando e modificando sem mutar o original');

// slice (não destrutivo)
let items = ['a', 'b', 'c', 'd', 'e', 'f'];
const sliced = items.slice(0, 5);
console.log('slice(0,5):', sliced); // ['a', 'b', 'c', 'd', 'e']
console.log('original:', items); // original intacto

// Excluir item do meio sem mutar
items = ['a', 'b', 'c', 'd', 'e', 'f'];
const i = 3;
const filteredItems = items.slice(0, i - 1).concat(items.slice(i));
console.log('sem item na posição 3:', filteredItems); // ["a", "b", "d", "e", "f"]

console.log('\n# Preenchendo e inicializando arrays');

// Criando array com 12 posições preenchidas com 0
const preenchido = Array(12).fill(0);
console.log('Array(12).fill(0):', preenchido);

// Criando array vazio de duas formas
const vazio1 = Array();
const vazio2 = [];
console.log('Array():', vazio1);
console.log('[]:', vazio2);
