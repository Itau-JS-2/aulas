// Array inicial com valores mistos: strings e números
// Em JavaScript, arrays podem conter qualquer tipo de dado.
let customersArray = [
  'Custy Stomer',
  'C. Oostomar',
  'C.U.S. Tomer',
  3432434,
  'Custo Mer',
  'Custopher Ustomer',
  3432435,
  'Kasti Yastimeur',
];

/**
 * Função que verifica se todos os elementos do array são strings.
 * Caso encontre algum elemento que não seja string, exibe um aviso no console.
 * Fazer verificações manuais seria trabalhoso, por isso a função automatiza essa tarefa.
 */
function checkCustomersArray(arr) {
  arr.map((el) => {
    if (typeof el !== 'string') {
      console.log(`Type error: ${el} should be a string!`);
    }
  });
}

/**
 * Função para adicionar novos valores ao array.
 * Apenas valores do tipo string são permitidos.
 * Caso o valor não seja string, uma mensagem de erro é exibida no console.
 */
function stringPush(val) {
  if (typeof val === 'string') {
    customersArray.push(val);
  } else {
    console.log(`Cannot add ${val} — value must be a string!`);
  }
}

// -------------------
// Testes do código
// -------------------

// Verifica o array inicial e mostra erros de tipo
checkCustomersArray(customersArray);

// Tenta adicionar uma string (funciona)
stringPush('New Customer');

// Tenta adicionar um número (bloqueado)
stringPush(12345);

// Verifica novamente para ver se apenas strings foram adicionadas
checkCustomersArray(customersArray);
