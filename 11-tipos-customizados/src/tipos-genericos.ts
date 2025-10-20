// tipos-genericos.ts

// Tipos genéricos permitem criar estruturas flexíveis que funcionam para qualquer tipo T
// Já vimos genéricos em Array<string>, mas podemos criar nossos próprios tipos genéricos

// Tipo genérico Family<T> com pais, parceiro e filhos
type Family<T> = {
  parents: [T, T];
  mate: T;
  children: T[];
};

// Tipos específicos que usaremos para os objetos
type Human = { name: string; job: string };
type Dog = { name: string; tailWagSpeed: number };

// Exemplo de família de números
let theFamily: Family<number> = {
  parents: [3, 4],
  mate: 9,
  children: [5, 30, 121],
};

// Exemplo de família de booleanos
let someFamily: Family<boolean> = {
  parents: [true, true],
  mate: false,
  children: [false, false, true, true],
};

// Exemplo de família de humanos
let aFamily: Family<Human> = {
  parents: [
    { name: 'Mom', job: 'software engineer' },
    { name: 'Dad', job: 'coding engineer' },
  ],
  mate: { name: 'Matesky', job: 'engineering coder' },
  children: [{ name: 'Babesky', job: 'none' }],
};

// Exemplo de família de cães
let anotherFamily: Family<Dog> = {
  parents: [
    { name: 'Momo', tailWagSpeed: 3 },
    { name: 'Dado', tailWagSpeed: 100 },
  ],
  mate: { name: 'Cheems', tailWagSpeed: 7 },
  children: [
    { name: 'Puppin', tailWagSpeed: 0.001 },
    { name: 'Puppenaut', tailWagSpeed: 0.0001 },
    { name: 'Puppenator', tailWagSpeed: 0.01 },
  ],
};

// O genérico T permite que Family seja usada com números, booleanos ou objetos complexos
