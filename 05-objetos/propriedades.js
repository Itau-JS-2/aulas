// Exemplo 1: Acesso e declaração de propriedades com nomes válidos e inválidos
const car1 = {
  brand: 'Ford',
  'the color': 'blue',
};

console.log(car1.brand); // "Ford"
console.log(car1['the color']); // "blue"

// Exemplo 2: Modificando valores de propriedades
const car2 = {
  color: 'blue',
};

car2.color = 'yellow';
car2['color'] = 'red';

console.log(car2.color); // "red"

// Exemplo 3: Adicionando propriedades que não existiam
const car3 = {};

car3.model = 'Fiesta';

console.log(car3.model); // "Fiesta"

// Exemplo 4: Usando delete para remover propriedades
const car4 = {
  model: 'Fiesta',
  color: 'green',
};

delete car4.model;
delete car4['color'];

console.log(car4); // {}
