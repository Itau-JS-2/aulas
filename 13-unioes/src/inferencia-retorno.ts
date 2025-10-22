// Inferência de tipo de retorno em funções
// O TypeScript consegue deduzir automaticamente o tipo retornado por uma função,
// mesmo sem especificá-lo explicitamente.

type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: 'nikko' };
  } else {
    return 'Could not create a user.';
  }
}

const userData: string | User = createUser();
console.log(userData);
