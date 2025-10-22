// Type Guards com o operador "in"
// Permitem verificar se uma propriedade existe em um objeto.
// Isso ajuda o TypeScript a entender o tipo exato dentro do bloco condicional.

type Cat = {
  name: string;
  run: () => string;
};

type Fish = {
  name: string;
  swim: () => string;
};

const siameseCat = {
  name: 'Proxie',
  run: () => 'pitter pat',
};

const bettaFish = {
  name: 'Neptune',
  swim: () => 'bubble blub',
};

function move(pet: Cat | Fish) {
  if ('run' in pet) return pet.run();
  if ('swim' in pet) return pet.swim();
}

console.log(move(siameseCat));
console.log(move(bettaFish));
