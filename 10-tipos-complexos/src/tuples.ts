// tuples.ts

// Tuplas em TypeScript
// Tuplas são arrays com tamanho e tipos fixos para cada posição.
// Diferente de arrays comuns, em que todos os elementos são do mesmo tipo,
// as tuplas permitem misturar tipos diferentes de forma controlada.

// Exemplo básico de tupla:
let ourTuple: [string, number, string, boolean] = [
  'Is',
  7,
  'our favorite number?',
  false,
];

// Cada posição da tupla tem um tipo e uma função específica.
// Aqui, o primeiro e terceiro são strings, o segundo é number e o quarto é boolean.

// Diferença entre tuplas e arrays
let tup: [string, string] = ['hi', 'bye']; // Tupla: exatamente dois elementos do tipo string
let arr: string[] = ['there', 'there']; // Array: qualquer quantidade de strings

tup = ['there', 'there']; // ✅ OK — mesma estrutura e tipos
// tup = arr; // ❌ Erro — arrays e tuplas não são compatíveis (mesmo que pareçam semelhantes)

// Funções que retornam tuplas
// Ideal quando a função retorna múltiplos valores com tipos específicos
function getUserInfo(): [string, number] {
  return ['Mateus', 21];
}

const [userName, userAge] = getUserInfo();
console.log(`User: ${userName}, Age: ${userAge}`);

// Exemplo prático: coordenadas com tipos específicos
let favoriteCoordinates: [number, number, string, number, number, string] = [
  40,
  43.2,
  'N',
  73,
  59.8,
  'W',
];
// Cada posição tem um papel fixo:
// [graus lat, minutos lat, hemisfério lat, graus long, minutos long, hemisfério long]

// Inferência de tipos em arrays comuns
// TypeScript infere automaticamente o tipo de cada elemento
let examAnswers = [true, false, false];
// O TS infere como: boolean[]
// Caso quiséssemos forçar uma tupla, precisaríamos anotar explicitamente:
let fixedExamAnswers: [boolean, boolean, boolean] = [true, false, false];
