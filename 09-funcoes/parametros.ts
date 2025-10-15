// parâmetros.ts

// Funções podem ser invocadas com argumentos de valor inesperado.
// Aqui, "text" recebe o número 3, mas números não têm propriedade "length".
function printLengthOfText(text) {
  console.log(text.length);
}

printLengthOfText(3); // Prints: undefined

// Solução: verificar o tipo do argumento antes de usá-lo.
function printLengthOfTextSafe(text: unknown): void {
  if (typeof text !== 'string') {
    throw new Error('Argument is not a string!');
  }

  console.log(text.length);
}

try {
  printLengthOfTextSafe(3); // Error: Argument is not a string!
} catch (err) {
  console.error(err.message);
}

// Exemplo de parâmetros invertidos.
// "value" era esperado como número, mas recebeu uma string → resulta em NaN.
function triple(value) {
  return value * 3;
}

function greetTripled(greeting, value) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled(5, 'Hiya'); // Resultado inesperado: "5, NaN!"

// Solução: adicionar tipagem para garantir a ordem e o tipo corretos.
function tripleTyped(value: number): number {
  return value * 3;
}

function greetTripledTyped(greeting: string, value: number): void {
  console.log(`${greeting}, ${tripleTyped(value)}!`);
}

greetTripledTyped('Hiya', 5); // OK: "Hiya, 15!"

// Exemplo de parâmetro obrigatório: em TS, o parâmetro é sempre exigido.
function greet(name: string) {
  console.log(`Hello, ${name || 'Anonymous'}!`);
}

greet('Anders'); // OK
// greet(); // ❌ Erro: Expected 1 arguments, but got 0

// Tornando o parâmetro opcional com "?" — deve vir após os obrigatórios.
function greetOptional(name?: string) {
  console.log(`Hello, ${name || 'Anonymous'}!`);
}

greetOptional(); // Hello, Anonymous!
greetOptional('Mateus'); // Hello, Mateus!

// Parâmetros padrão: permitem definir um valor por padrão automaticamente.
function greetDefault(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}

greetDefault(); // Hello, Anonymous!
greetDefault('Mateus'); // Hello, Mateus!

// Exemplo com parâmetros padrão para simplificar o código.
function proclaim(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}

proclaim(); // I'm not ready...
proclaim('ready?'); // I'm ready?
proclaim('ready!', 3); // I'm ready! (x3)
