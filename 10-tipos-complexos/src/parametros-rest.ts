// parametros-rest.ts

// Parâmetros rest em TypeScript
// Permitem agrupar múltiplos argumentos em um array.
// São úteis quando não sabemos quantos valores serão passados a uma função.

// Exemplo sem tipos:
function smush(firstString, ...otherStrings) {
  let output = firstString;
  for (let i = 0; i < otherStrings.length; i++) {
    output = output.concat(otherStrings[i]);
  }
  return output;
}

// Exemplo com tipos explícitos:
// Aqui, o primeiro parâmetro é uma string e o restante é um array de strings.
function smushTyped(firstString: string, ...otherStrings: string[]): string {
  let output = firstString;
  for (let i = 0; i < otherStrings.length; i++) {
    output = output.concat(otherStrings[i]);
  }
  return output;
}

console.log(smushTyped('a', 'h', 'h', 'H', 'H', 'H', '!', '!')); // "ahhHHH!!"

// Outro exemplo: somar números elevados a uma potência específica.
// Sem tipos explícitos:
function addPower(p, ...numsToAdd) {
  let answer = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    answer += numsToAdd[i] ** p;
  }
  return answer;
}

// Com tipos explícitos:
// O parâmetro `p` é um número e o restante (`numsToAdd`) é um array de números.
function addPowerTyped(p: number, ...numsToAdd: number[]): number {
  let answer = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    answer += numsToAdd[i] ** p;
  }
  return answer;
}

console.log(addPowerTyped(2, 4, 5, 6)); // 4² + 5² + 6² = 77

// Resumo:
// - O parâmetro rest (`...`) transforma argumentos em um array.
// - Pode ser usado apenas **no final da lista de parâmetros**.
// - Permite que a função aceite um número variável de argumentos.
