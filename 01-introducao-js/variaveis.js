// Exemplos de literais, identificadores, variáveis e tipos de dados em JavaScript

// ---------------------
// Literais
// ---------------------
// Valores escritos diretamente no código (os mais básicos do JS)
42; // number
('Olá, mundo!'); // string com aspas simples
('Teste'); // string com aspas duplas
true; // boolean
null; // valor nulo
[1, 2, 3]; // array
{
  nome: 'Ana';
} // objeto

// ---------------------
// Identificadores
// ---------------------
// Nomes que usamos para variáveis, funções etc.
// Devem começar com letra, underscore (_) ou cifrão ($).
// Não podem ser palavras reservadas.
let nome;
let _idade;
let $usuario;
let quantidadeDeProdutos;

// Exemplos inválidos (comentados para não gerar erro):
// let 1nome;       // ❌ começa com número
// let function;    // ❌ palavra reservada
// let meu-nome;    // ❌ hífen não permitido

// ---------------------
// Comentários
// ---------------------
// Comentários de uma linha:
true; // comentário na mesma linha

/* 
   Comentários
   de múltiplas linhas
*/

// ---------------------
// Declaração de variáveis
// ---------------------
// let → variável de escopo de bloco, pode mudar
let idade = 25; // identificador: idade | literal: 25

// const → constante de escopo de bloco, não pode ser reatribuída
const nomePessoa = 'Lucas';

// var → variável com escopo de função/global (não recomendado)
var ativo = true;

// ---------------------
// const com objetos/arrays
// ---------------------
// O identificador não pode ser reatribuído,
// mas o conteúdo interno (objeto/array) pode mudar.
const nomes = ['Ana', 'João'];
nomes.push('Carlos'); // ✅ permitido (alterando conteúdo)
// nomes = [];        // ❌ TypeError (reatribuição)

// ---------------------
// Tipos primitivos
// ---------------------
// Valores simples, imutáveis e passados por valor
let idadeNum = 30; // number
let nomeStr = 'Lucas'; // string
let ativoBool = true; // boolean
let vazio = null; // null (ausência intencional de valor)
let naoDefinido; // undefined (não inicializada)
let simbolo = Symbol('id'); // symbol (identificador único)
let numeroGrande = 12345678901234567890n; // bigint (números grandes)

// ---------------------
// Objetos (não primitivos)
// ---------------------
// Valores estruturados, mutáveis e passados por referência
let pessoa = {
  nome: 'Ana',
  idade: 28,
};

let lista = [1, 2, 3, 4];

function saudacao() {
  return 'Olá!';
}
