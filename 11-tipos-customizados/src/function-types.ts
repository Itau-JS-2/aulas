// function-types.ts

// Exemplo de atribuição de função a uma variável
// Note que não usamos parênteses ao atribuir, pois não queremos executá-la ainda
let myFavoriteFunction = console.log;
myFavoriteFunction('Hello World'); // Exibe: Hello World

// Podemos criar tipos para funções que aceitam e retornam valores específicos
// O nome dos parâmetros não precisa ser igual, apenas os tipos devem coincidir
type StringsToNumberFunction = (arg0: string, arg1: string) => number;

let myFunc: StringsToNumberFunction;

myFunc = function (firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};

myFunc = function (whatever: string, blah: string) {
  return whatever.length - blah.length;
};

// Funções matemáticas simples para exemplo de callbacks
function add(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b;
}
function multiply(a: number, b: number) {
  return a * b;
}
function divide(a: number, b: number) {
  return a / b;
}
function wrongAdd(a: number, b: number) {
  return a + b + ''; // Retorna string — propositalmente incorreto para teste
}

// Criamos um tipo para representar funções de operação matemática válidas
type OperatorFunction = (a: number, b: number) => number;

// A função mathTutor aceita apenas callbacks compatíveis com OperatorFunction
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name, '!');
  let value25 = operationCallback(2, 5);
  console.log(
    'When we',
    operationCallback.name,
    '2 and 5, we get',
    value25,
    '.'
  );
  console.log(
    'When we',
    operationCallback.name,
    value25,
    'and 7, we get',
    operationCallback(value25, 7),
    '.'
  );
  console.log('Now fill out this worksheet.');
}

// Chamadas válidas e inválidas
mathTutor(multiply); // Correto
// mathTutor(wrongAdd) // Erro: wrongAdd retorna string, não number
