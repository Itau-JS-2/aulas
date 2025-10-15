// retorno.ts

// Tipo de retorno implícito: o TypeScript infere automaticamente o tipo com base no valor retornado.
function createGreeting(name: string) {
  return `Hello, ${name}!`;
}

const myGreeting = createGreeting('Aisle Nevertell');
// TS infere: myGreeting é do tipo `string`

// Tipo de retorno explícito: melhora a legibilidade e previne retornos incorretos.
function createGreetingExplicit(name?: string): string {
  return `Hello, ${name || 'Anonymous'}!`;
}

const explicitGreeting = createGreetingExplicit();
console.log(explicitGreeting); // Hello, Anonymous!

// Também é possível usar tipo de retorno explícito em arrow functions.
const createArrowGreeting = (name?: string): string => {
  return `Hello, ${name || 'Anonymous'}!`;
};

console.log(createArrowGreeting('Mateus')); // Hello, Mateus!

// Retorno do tipo void: usado quando a função apenas executa um efeito colateral (ex: imprimir no console).
function logGreeting(name: string): void {
  console.log(`Hello, ${name}!`);
}

logGreeting('Aisle Nevertell'); // Hello, Aisle Nevertell!
