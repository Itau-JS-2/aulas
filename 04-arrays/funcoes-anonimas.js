// --- Função nomeada vs Função anônima ---
// Função nomeada tradicional
function ola() {
  console.log('Olá!');
}

// Função anônima atribuída a uma variável
const olaAnonima = function () {
  console.log('Olá, sou anônima!');
};

// Chamadas
ola();
olaAnonima();

// --- Função anônima atribuída a variável ---
// Função anônima que soma dois números
const soma = function (a, b) {
  return a + b;
};

console.log(soma(2, 3)); // 5

// --- Arrow Function ---
// Versão moderna e mais curta da função acima
const somaArrow = (a, b) => a + b;

console.log(somaArrow(2, 3)); // 5

// --- Visualizando a função sem executá-la ---
// Podemos imprimir a definição da função sem chamá-la
const func = (x) => x * 2;

console.log(func); // Mostra a definição da função
console.log(func(5)); // Executa a função e mostra 10
