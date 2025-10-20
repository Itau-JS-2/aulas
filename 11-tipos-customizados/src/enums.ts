// enums.ts

// Enum básico com valores numéricos automáticos
// Cada item recebe um número começando em 0 (North = 0, South = 1, ...)
enum Direction {
  North,
  South,
  East,
  West,
}

let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // Correto
// whichWayToArcticOcean = Direction.Southeast // Erro: não existe Southeast no enum
// whichWayToArcticOcean = West // Erro: precisa usar Direction.West

// O TypeScript trata enums numéricos como números internamente
whichWayToArcticOcean = Direction.North;
console.log(whichWayToArcticOcean === 0); // true

// Podemos mudar a sequência numérica alterando o valor inicial
enum DirectionCustomStart {
  North = 7,
  South,
  East,
  West,
}
console.log(DirectionCustomStart.South); // 8

// Exemplo de uso de enum para restringir valores possíveis
// Apenas os tipos definidos no enum são aceitos
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula,
}

let petOnSaleTS: Pet = Pet.Chinchilla; // Valor seguro e tipado

// Array com pares [Pet, número] garantindo que apenas pets válidos sejam usados
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
];

// Comparação entre enums numéricos e de string
enum DirectionNumber {
  North,
  South,
  East,
  West,
} // Internamente usa 0, 1, 2, 3
enum DirectionString {
  North = 'NORTH',
  South = 'SOUTH',
  East = 'EAST',
  West = 'WEST',
} // Usa strings literais

// String enums são preferidos quando queremos legibilidade e valores fixos
// Ficam mais claros em logs e não dependem da ordem dos itens

// Transformando o enum Pet em enum de strings para facilitar debug e leitura
enum PetString {
  Hamster = 'HAMSTER',
  Rat = 'RAT',
  Chinchilla = 'CHINCHILLA',
  Tarantula = 'TARANTULA',
}

let petOnSaleString: PetString = PetString.Rat;
console.log(petOnSaleString); // "RAT"
