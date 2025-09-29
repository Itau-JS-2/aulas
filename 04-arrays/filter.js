const a = [1, 2, 3, 4, 5];

// Exemplo 1: Filtrar apenas números pares usando uma função callback completa
const even1 = a.filter((item) => {
  if (item % 2 === 0) return true;
  return false;
});
console.log('even1 (números pares com if/else):', even1);
// Resultado: [2, 4]

// Exemplo 2: Forma reduzida da mesma filtragem
const even2 = a.filter((item) => item % 2 === 0);
console.log('even2 (números pares forma reduzida):', even2);
// Resultado: [2, 4]

// Exemplo 3: Encontrar elemento específico (item === 3)
const b = a.filter((item) => item === 3).shift();
console.log('b (elemento igual a 3):', b);
// Resultado: 3 (shift pega o primeiro elemento do array filtrado)

// Exemplo 4: Remover um item do array (remover 3)
const without3 = a.filter((item) => item !== 3);
console.log('without3 (array sem o 3):', without3);
// Resultado: [1, 2, 4, 5]

// Exemplo 5: Excluir múltiplos itens de um array
const items = ['a', 'b', 'c', 'd', 'e', 'f'];
const valuesToRemove = ['c', 'd'];

const filteredItems = items.filter((item) => !valuesToRemove.includes(item));
console.log("filteredItems (excluindo 'c' e 'd'):", filteredItems);
// Resultado: ["a", "b", "e", "f"]
