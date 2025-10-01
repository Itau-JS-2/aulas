// Exemplo 1: Tipos primitivos são passados por valor
let age = 36;
let newAge = age;

newAge = 37;

console.log(age); // 36
console.log(newAge); // 37

// Exemplo 2: Objetos (e arrays) são passados por referência
const car = {
  color: 'blue',
};

const anotherCar = car;
anotherCar.color = 'yellow';

console.log(car.color); // "yellow"
console.log(anotherCar.color); // "yellow"

// Arrays também são passados por referência
const list = [1, 2, 3];
const anotherList = list;
anotherList.push(4);

console.log(list); // [1, 2, 3, 4]
console.log(anotherList); // [1, 2, 3, 4]
