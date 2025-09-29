const a = [1, 2, 3];

// Exemplo 1: Função callback que não retorna nada (undefined)
const b1 = a.map(() => {});
console.log('b1 (callback sem retorno):', b1);
// Resultado: [undefined, undefined, undefined]
// O map cria um novo array com o retorno da função callback para cada item.
// Como não retornamos nada, cada elemento é undefined.

// Exemplo 2: Função callback que retorna um valor fixo (5)
const b2 = a.map(() => 5);
console.log('b2 (callback retorna 5):', b2);
// Resultado: [5, 5, 5]
// A função sempre retorna 5, então o novo array tem três vezes o valor 5.

// Exemplo 3: Função callback que retorna o próprio item (cópia do array)
const b3 = a.map((item) => item);
console.log('b3 (cópia do array a):', b3);
// Resultado: [1, 2, 3]
// Cada item do array original é retornado igual, formando uma cópia.

// Exemplo 4: Callback que recebe item, índice e array completo
const b4 = a.map((item, index, arr) => {
  console.log('Item:', item, 'Index:', index, 'Array completo:', arr);
  return item; // Retornamos o item para criar um novo array igual a 'a'
});
console.log('b4 (com callback mostrando parâmetros):', b4);
// O console.log dentro do callback imprime cada item, índice e o array original.
// O array final b4 é uma cópia do array original.
