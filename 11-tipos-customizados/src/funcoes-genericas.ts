// funcoes-genericas.ts

// Função genérica que retorna um array preenchido com o valor fornecido
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

// Variáveis que irão armazenar arrays de diferentes tipos
let stringArray: string[];
let numberArray: number[];
let personArray: { name: string; age: number }[];
let coordinateArray: [number, number][];

// Chamadas da função genérica usando tipos específicos
stringArray = getFilledArray<string>('hi', 6); // Array de strings com 6 elementos
numberArray = getFilledArray<number>(9, 6); // Array de números com 6 elementos
personArray = getFilledArray<{ name: string; age: number }>(
  { name: 'J. Dean', age: 24 },
  6
); // Array de objetos com 6 elementos
coordinateArray = getFilledArray<[number, number]>([3, 4], 6); // Array de tuplas [number, number] com 6 elementos

// Agora todas as variáveis têm 6 elementos do tipo correspondente
console.log(stringArray);
console.log(numberArray);
console.log(personArray);
console.log(coordinateArray);
