console.log('\n# Desestruturando Arrays');

// Básico
const list = [1, 2];
const [first, second] = list;
console.log('first:', first); // 1
console.log('second:', second); // 2

// Rest operator
const listaCompleta = [1, 2, 3, 4, 5];
const [f1, f2, ...resto] = listaCompleta;
console.log('\nCom rest:');
console.log('f1:', f1); // 1
console.log('f2:', f2); // 2
console.log('resto:', resto); // [3, 4, 5]

// Pular valores
const numeros = [10, 20, 30, 40];
const [, segundo, , quarto] = numeros;
console.log('\nPulando valores:');
console.log('segundo:', segundo); // 20
console.log('quarto:', quarto); // 40

// Trocar valores
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log('\nTrocando valores:');
console.log('a:', a); // 2
console.log('b:', b); // 1

// Desestruturação como argumento de função
function mostrarPrimeiros([x, y]) {
  console.log('\nFunção com desestruturação:');
  console.log('Primeiro:', x);
  console.log('Segundo:', y);
}

const frutas = ['maçã', 'banana', 'laranja'];
mostrarPrimeiros(frutas);
