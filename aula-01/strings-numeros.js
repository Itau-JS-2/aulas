// 03-strings-numeros.js
// Exemplos de Strings e Números em JavaScript

// Strings são sequências de caracteres
const nome = 'Mateus';
const frase = 'JavaScript é legal!';
console.log(nome, frase);

// É possível usar aspas simples, duplas ou crases
const exemplo1 = 'texto com aspas duplas';
const exemplo2 = 'texto com aspas simples';
const exemplo3 = `texto com crase`;
console.log(exemplo1, exemplo2, exemplo3);

// Template literals permitem interpolação de variáveis ou expressões
const pessoa = 'Ana';
console.log(`Olá, ${pessoa}!`); // Olá, Ana!

// Template literals também permitem quebrar linhas sem caracteres especiais
const mensagem = `
Olá!
Bem-vindo(a) ao curso de JavaScript.
`;
console.log(mensagem);

// Métodos de String
const texto = 'JavaScript';
console.log(texto.toUpperCase()); // JAVASCRIPT → tudo maiúsculo
console.log(texto.toLowerCase()); // javascript → tudo minúsculo
console.log(texto.length); // 10 → quantidade de caracteres
console.log(texto.includes('Script')); // true → verifica se contém a palavra

// Números em JS podem ser inteiros ou decimais (tipo único: number)
const idade = 20; // inteiro
const pi = 3.1415; // decimal
const saldo = -15.99; // negativo
console.log(idade, pi, saldo);

// Métodos de Número
const numero = 3.14159;
console.log(numero.toFixed(2)); // "3.14" → arredonda e retorna string
console.log(numero.toString()); // "3.14159" → transforma em string
