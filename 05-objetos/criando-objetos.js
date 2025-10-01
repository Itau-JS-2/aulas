// 1. Objeto criado de forma literal
// Forma mais comum e direta

const carLiteral = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022,
  start() {
    console.log(`O ${this.brand} ${this.model} está ligado.`);
  },
};

carLiteral.start();
// Saída: O Toyota Corolla está ligado.

// 2. Objeto criado com new Object()
// Funciona igual à forma literal, mas é mais verboso

const carConstrutor = new Object();

carConstrutor.brand = 'Honda';
carConstrutor.model = 'Civic';
carConstrutor.year = 2023;
carConstrutor.start = function () {
  console.log(`O ${this.brand} ${this.model} está ligado.`);
};

carConstrutor.start();
// Saída: O Honda Civic está ligado.

// 3. Objeto criado com Object.create()
// Permite definir um protótipo para o novo objeto

const carPrototype = {
  start() {
    console.log(`O ${this.brand} ${this.model} está ligado.`);
  },
};

const carCreate = Object.create(carPrototype);

carCreate.brand = 'Ford';
carCreate.model = 'Focus';
carCreate.year = 2021;

carCreate.start();
// Saída: O Ford Focus está ligado
