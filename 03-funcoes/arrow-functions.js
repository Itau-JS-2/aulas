// 1. O que são Arrow Functions
function dobro(n) {
  return n * 2;
}

const dobroArrow = (n) => {
  return n * 2;
};

console.log(dobro(4)); // 8
console.log(dobroArrow(4)); // 8

// 2. Sintaxe reduzida (chaves e return implícito)
const dobroReduzido = (n) => n * 2;

console.log(dobroReduzido(5)); // 10

// 3. Parênteses com parâmetros
const semParametro = () => console.log('Oi');
semParametro();

const umParametro = (nome) => console.log('Olá, ' + nome);
umParametro('Lucas');

const doisParametros = (a, b) => console.log(a + b);
doisParametros(3, 4); // 7

// 4. Usando como callbacks
const numeros = [1, 2, 3, 4, 5];

const dobrados1 = numeros.map(function (n) {
  return n * 2;
});

const dobrados2 = numeros.map((n) => n * 2);

console.log(dobrados1); // [2, 4, 6, 8, 10]
console.log(dobrados2); // [2, 4, 6, 8, 10]

// 5. Arrow function com objetos (return implícito com parênteses)
const criarUsuario = (nome, idade) => ({
  nome,
  idade,
  ativo: true,
});

console.log(criarUsuario('João', 25));
// { nome: 'João', idade: 25, ativo: true }

// 6. Limitações das Arrow Functions (não têm próprio this)
const pessoa = {
  nome: 'Ana',
  falar: () => {
    console.log('Meu nome é', this.nome);
  },
};

pessoa.falar(); // Meu nome é undefined (this não funciona como esperado)
