// Tipos explícitos
let something: string = 'something';

// Tipo any permite qualquer valor (não recomendado)
let anything: any = 'anything';

// Exemplo de ID que pode ser string ou number usando união de tipos
let ID: string | number;

ID = 123;
console.log(`The ID is ${ID}.`);

ID = 'ABC123';
console.log(`The ID is ${ID}.`);
