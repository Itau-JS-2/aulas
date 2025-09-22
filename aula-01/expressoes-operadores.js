// ---------------------
// Expressões
// ---------------------
// Qualquer bloco de código que retorna um valor
2; // literal number → 2
('something'); // string → 'something'
true; // boolean
undefined; // indefinido
let age = 21; // variável declarada
age; // retorna 21
{
} // objeto vazio
[]; // array vazio

// ---------------------
// Operadores aritméticos
// ---------------------
// Fazem operações matemáticas, retornando número
console.log(2 + 3); // soma → 5
console.log(10 - 4); // subtração → 6
console.log(3 * 2); // multiplicação → 6
console.log(8 / 2); // divisão → 4
console.log(10 % 3); // resto → 1

// Agrupamento com parênteses
let total = 4 * (2 + 3); // 4 * 5 = 20
console.log(total);

// ---------------------
// Operações com strings
// ---------------------
// O operador + também concatena texto
let nome = 'Lucas';
let saudacao = 'Olá, ' + nome; // "Olá, Lucas"
console.log(saudacao);

// ---------------------
// Operadores de atribuição
// ---------------------
// Atribuem ou atualizam variáveis
let x = 10; // atribuição simples
x += 5; // x = x + 5 → 15
x -= 2; // x = x - 2 → 13
x *= 3; // x = x * 3 → 39
console.log(x);

// ---------------------
// Incremento e decremento
// ---------------------
// Modificam a variável em +1 ou -1
let i = 5;
console.log(++i); // pré-incremento → 6 (incrementa antes)
console.log(i); // 6

let j = 5;
console.log(j++); // pós-incremento → imprime 5, depois vira 6
console.log(j); // 6

// Comparação entre pré e pós
let m = 1;
let n = ++m; // m = 2, n = 2
console.log(m, n);

let a = 1;
let b = a++; // b = 1, depois a = 2
console.log(a, b);

// ---------------------
// Operadores lógicos
// ---------------------
// Retornam valores booleanos (true/false)
console.log(true && true); // AND → true
console.log(true || false); // OR  → true
console.log(!true); // NOT → false

let ativo = true;
console.log(!ativo); // false

// ---------------------
// Precedência de operadores
// ---------------------
// Ordem de execução: * / % > + - > =
let resultado1 = 2 + 3 * 4; // 3*4=12 → 2+12=14
console.log(resultado1);

// Mudando a ordem com parênteses
let resultado2 = (2 + 3) * 4; // 2+3=5 → 5*4=20
console.log(resultado2);

// Exemplo mais complexo
let resultado3 = 1 * 2 + ((5 / 2) % 2);
// 1*2 = 2 → 5/2 = 2.5 → 2.5 % 2 = 0.5 → 2 + 0.5 = 2.5
console.log(resultado3);
