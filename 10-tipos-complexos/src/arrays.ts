// arrays.ts

// Arrays em TypeScript
// Podemos declarar arrays tipados de duas formas:
// 1. Usando a sintaxe de colchetes: string[]
// 2. Usando o tipo genérico: Array<string>

// Exemplo: ambos são equivalentes
let fruits1: string[] = ['apple', 'banana', 'cherry'];
let fruits2: Array<string> = ['mango', 'grape', 'orange'];

// Arrays numéricos
// O tipo é definido após o número de colchetes.
let bestNumbers: number[] = [7, 77, 4];
// Ou usando a forma genérica:
let moreNumbers: Array<number> = [10, 20, 30];

// Caso tentemos inserir um valor de outro tipo, o TypeScript gera um erro:
// bestNumbers.push('not a number'); // ❌ Erro: string não é atribuível a number

// Arrays de strings
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: Array<string> = [
  'scrambled eggs',
  'oatmeal',
  'tamago kake gohan',
  'any kind of soup',
];

// Arrays de booleanos
let bestBooleans: boolean[] = [true, false];
let altBooleans: Array<boolean> = [false, true, true];

// Matrizes (arrays multidimensionais)
// É possível criar arrays de arrays — ou seja, “matrizes”.
let bestMealPlan: string[][] = [
  bestLunches,
  bestBreakfasts,
  ['baked potato', 'mashed potato'],
];

// Também é possível com a sintaxe genérica:
let altMealPlan: Array<Array<string>> = [
  ['rice', 'beans'],
  ['salad', 'pasta'],
];

// Exemplo com booleanos em múltiplas dimensões
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let altBooleansTwice: Array<Array<boolean>> = [altBooleans, bestBooleans];

// Exemplo com números em três dimensões (array de arrays de arrays)
let numbersMulti: number[][][] = [
  [[1], [2, 3]],
  [[7], bestNumbers],
];

// Ou na forma genérica:
let numbersMultiAlt: Array<Array<Array<number>>> = [
  [[10], [20, 30]],
  [[40], moreNumbers],
];
