// 1. Valor de retorno padrão (undefined)
function semRetorno() {
  console.log('Executando algo...');
}

const resultado = semRetorno();
console.log(resultado); // undefined

// 2. Usando return para retornar valores
function somar(a, b) {
  return a + b;
}

const total = somar(5, 7);
console.log(total); // 12

// 3. Usando return para encerrar a função
function verificarIdade(idade) {
  if (idade < 18) {
    return 'Menor de idade';
  }

  console.log('Executando verificação adicional...');
  return 'Maior de idade';
}

console.log(verificarIdade(16)); // "Menor de idade"

// 4. Retornando múltiplos valores com arrays
function calcularValores(a, b) {
  const soma = a + b;
  const multiplicacao = a * b;
  return [soma, multiplicacao];
}

const [s, m] = calcularValores(3, 4);
console.log('Soma:', s); // 7
console.log('Multiplicação:', m); // 12

// 5. Retornando múltiplos valores com objetos
function getUser() {
  return {
    nome: 'Carla',
    idade: 28,
    ativo: true,
  };
}

const { nome, idade, ativo } = getUser();
console.log(nome, idade, ativo); // Carla 28 true

// 6. Retornando funções (função de ordem superior)
function criarSaudacao(saudacao) {
  return function (nome) {
    return `${saudacao}, ${nome}!`;
  };
}

const ola = criarSaudacao('Olá');
console.log(ola('Lucas')); // "Olá, Lucas!"
