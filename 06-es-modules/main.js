// main.js

// Importação nomeada
import { age } from './module.js';
console.log('Idade (named):', age);

// Importação default
import defaultAge from './module.js';
console.log('Idade (default):', defaultAge);

// Importação nomeada adicional
import { name } from './module.js';
console.log('Nome:', name);

// Múltiplos imports (parciais)
import { a, b } from './module.js';
console.log('A:', a);
console.log('B:', b);

// Importação com rename (alias)
import { a as ageOfMyCat } from './module.js';
console.log('Idade do gato:', ageOfMyCat);

// Importação de todos os itens
import * as everything from './module.js';
console.log('Tudo:', everything); // { default: 18, age: 18, name: 'Test', a: 1, b: 2, c: 3 }
