// object-types.ts

// Exemplo básico de tipo de objeto
// Após o ":", declaramos o tipo esperado de cada propriedade
let aPerson: { name: string; age: number };

// Tipagem forte: o valor precisa seguir o formato definido
// aPerson = { name: 'Aisle Nevertell', age: "wouldn't you like to know" } // Erro: age deve ser number
// aPerson = { name: 'Kushim', yearsOld: 5000 } // Erro: a propriedade correta é "age"
aPerson = { name: 'User McCodecad', age: 22 }; // Correto

// Tipos de objeto também podem ser usados como parâmetros de função
// Aqui tipamos o parâmetro "personObject" como um objeto com campos bem definidos
function sayHappyBirthdayWithObject(personObject: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}) {
  let output = '';
  output += 'Happy Birthday ' + personObject.name + '! ';
  output += 'You are now ' + personObject.age + ' years old! ';
  output +=
    'Your birthday wish was to receive ' +
    personObject.giftWish +
    '. And guess what? You will ';
  if (!personObject.success) {
    output += 'not ';
  }
  output += 'receive it! \n';
  console.log(output);
}

// Exemplo de uso com um array de objetos tipados
// Cada item segue a mesma estrutura esperada pela função
let birthdayBabies = [
  { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
  { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
  { name: 'Ava', age: 0, giftWish: '$0.25', success: true },
];

// O método forEach garante que cada objeto é passado para a função com o tipo correto
birthdayBabies.forEach(sayHappyBirthdayWithObject);
