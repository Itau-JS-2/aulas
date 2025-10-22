// Type Guards sem usar "else"
// Quando um return é encontrado dentro do if, o fluxo da função termina.
// O TypeScript entende automaticamente que, após o if, o tipo restante é o outro possível.

type Metal = {
  magnetize: () => string;
};

type Glass = {
  melt: () => string;
};

const iron = {
  magnetize: () => 'Electromagnet activated',
};

const bottle = {
  melt: () => 'Furnace set to 2,700 degrees',
};

function recycle(trash: Metal | Glass) {
  if ('magnetize' in trash) {
    return trash.magnetize();
  }
  return trash.melt();
}

console.log(recycle(iron));
console.log(recycle(bottle));
