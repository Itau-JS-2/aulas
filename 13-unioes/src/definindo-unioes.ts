// Exemplo de união de tipos em variável
let ID: string | number;

ID = 1;
console.log(`The ID is ${ID}.`);

ID = '001';
console.log(`The ID is ${ID}.`);

// União de tipos em parâmetros de função
function getMarginLeft(margin: string | number) {
  return { marginLeft: margin };
}

// Exercício: tipando corretamente o parâmetro
function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

// Testes
printNumsAndStrings('hello!');
printNumsAndStrings(42);
