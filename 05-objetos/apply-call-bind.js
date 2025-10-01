const car = {
  maker: 'Ford',
  model: 'Fiesta',
};

// Usando bind para fixar o contexto
const drive = function () {
  console.log(`Driving a ${this.maker} ${this.model} car!`);
}.bind(car);

drive(); // Driving a Ford Fiesta car!

// Usando bind com outro objeto
const anotherCar = { maker: 'Audi', model: 'A4' };

const carWithMethod = {
  maker: 'Ford',
  model: 'Fiesta',
  drive() {
    console.log(`Driving a ${this.maker} ${this.model} car!`);
  },
};

carWithMethod.drive.bind(anotherCar)(); // Driving a Audi A4 car!

// Usando call
const drive2 = function (kmh) {
  console.log(`Driving a ${this.maker} ${this.model} car at ${kmh} km/h!`);
};

drive2.call(car, 100); // Driving a Ford Fiesta car at 100 km/h!
drive2.apply(car, [100]); // Driving a Ford Fiesta car at 100 km/h!
