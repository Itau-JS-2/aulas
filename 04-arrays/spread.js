const frutas = ['banana', 'pera', 'maçã'];
console.log(frutas.length, frutas);

const copiaFrutas = [...frutas];
console.log(copiaFrutas);

const frutasInicio = ['morango', ...frutas];
console.log(frutasInicio);

const frutasFim = [...frutas, 'kiwi'];
console.log(frutasFim);

console.log(frutas);
