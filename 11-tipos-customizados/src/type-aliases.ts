// type-aliases.ts

// Exemplo de criação de um alias simples para um tipo primitivo
// "MyString" agora é um apelido para o tipo "string"
type MyString = string;
let myVar: MyString = 'Hi'; // Válido, pois MyString é equivalente a string

// Exemplo de objeto com tipos explícitos e repetitivos
let aCompany: {
  companyName: string;
  boss: { name: string; age: number };
  employees: { name: string; age: number }[];
  employeeOfTheMonth: { name: string; age: number };
  moneyEarned: number;
};

// Podemos simplificar criando aliases reutilizáveis
// O tipo PersonType é um alias para objetos com "name" e "age"
type PersonType = { name: string; age: number };

// O tipo CompanyType usa o PersonType para definir várias propriedades relacionadas
type CompanyType = {
  companyName: string;
  boss: PersonType;
  employees: PersonType[];
  employeeOfTheMonth: PersonType;
  moneyEarned: number;
};

let anotherCompany: CompanyType = {
  companyName: 'Codecademy Inc.',
  boss: { name: 'Alice', age: 40 },
  employees: [
    { name: 'Bob', age: 25 },
    { name: 'Eve', age: 30 },
  ],
  employeeOfTheMonth: { name: 'Bob', age: 25 },
  moneyEarned: 500000,
};

// Agora aplicando aliases em funções e arrays para evitar repetição
// Alias para representar uma pessoa com mais informações
type BirthdayPerson = {
  name: string;
  giftWish: string;
  age: number;
  success: boolean;
};

// A função agora usa o alias BirthdayPerson como tipo do parâmetro
function sayHappyBirthdayWithObject(personObject: BirthdayPerson) {
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

// O array usa o mesmo alias, garantindo consistência de tipos
let birthdayBabies: BirthdayPerson[] = [
  { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
  { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
  { name: 'Ava', age: 0, giftWish: '$0.25', success: true },
];

// O uso de aliases evita repetição e torna o código mais legível
birthdayBabies.forEach(sayHappyBirthdayWithObject);
