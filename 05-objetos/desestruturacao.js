// Desestruturando diretamente do objeto
const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54,
};

const { firstName, age } = person;
console.log(firstName); // Tom
console.log(age); // 54

// Atribuindo a variáveis com nomes diferentes
const { firstName: name } = person;
console.log(name); // Tom

// Desestruturando diretamente no parâmetro da função
function printInfo({ firstName, age }) {
  console.log(`${firstName} is ${age} years old.`);
}

printInfo(person); // Tom is 54 years old.
