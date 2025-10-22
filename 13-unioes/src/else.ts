// Type Guards e inferência inversa do TypeScript
// Quando usamos uma verificação dentro de um if, o TS entende automaticamente
// o tipo oposto no else. Assim, podemos manipular cada tipo com segurança.

type Pasta = {
  menuName: string;
  boil: () => string;
};

type Meat = {
  menuName: string;
  panFry: () => string;
};

const fettuccine = {
  menuName: 'Fettuccine',
  boil: () => 'Heat water to 212 degrees',
};

const steak = {
  menuName: 'New York Strip Steak',
  panFry: () => 'Heat oil to 350 degrees',
};

function prepareEntree(entree: Pasta | Meat) {
  if ('boil' in entree) {
    return entree.boil();
  } else {
    return entree.panFry();
  }
}

console.log(prepareEntree(fettuccine));
console.log(prepareEntree(steak));
