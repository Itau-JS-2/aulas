// Exemplo 1: Ordenação alfabética simples
const a = ['b', 'd', 'c', 'a'];
a.sort();
console.log('a ordenado alfabeticamente:', a);
// Resultado: ['a', 'b', 'c', 'd']

// Exemplo 2: Ordenação padrão com números (não funciona como esperado)
const nums = [1, 2, 3, 10, 11];
nums.sort();
console.log('nums ordenado com sort padrão:', nums);
// Resultado: [1, 10, 11, 2, 3]
// Porque o sort converte números para strings e ordena por valor ASCII

// Exemplo 3: Ordenação mista de números e strings
const mixed = [1, 'a', 'Z', 3, 2, 11];
mixed.sort();
console.log('mixed ordenado com sort padrão:', mixed);
// Resultado: [1, 11, 2, 3, 'Z', 'a']
// Mesma lógica de comparação lexicográfica

// Exemplo 4: Ordenação numérica correta com função comparadora
const nums2 = [1, 4, 3, 2, 5];
nums2.sort((a, b) => (a > b ? 1 : -1));
console.log('nums2 ordenado numericamente com callback:', nums2);
// Resultado: [1, 2, 3, 4, 5]

// Exemplo 5: Inverter o array com reverse
nums2.reverse();
console.log('nums2 após reverse():', nums2);
// Resultado: [5, 4, 3, 2, 1]
