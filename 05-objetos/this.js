// Exemplo com função tradicional (this funciona corretamente)
const car1 = {
  brand: 'Ford',
  model: 'Fiesta',
  start: function () {
    console.log(`Started ${this.brand} ${this.model}`);
  },
};

car1.start(); // Started Ford Fiesta

// Exemplo com arrow function (this não aponta para o objeto)
const car2 = {
  brand: 'Ford',
  model: 'Fiesta',
  start: () => {
    console.log(`Started ${this.brand} ${this.model}`);
  },
};

car2.start(); // Started undefined undefined
