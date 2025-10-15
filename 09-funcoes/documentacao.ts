// documentação.ts

// Comentário de linha
// Este é um comentário curto para explicar algo rapidamente

/*
Comentário
de múltiplas linhas
usado para explicações mais longas
*/

/**
 * Comentário de documentação
 * Usado para descrever funções, parâmetros e retornos
 */

/**
 * Retorna a soma de dois números.
 * @param x - Primeiro número
 * @param y - Segundo número
 * @returns Soma dos dois números
 */
function getSum(x: number, y: number): number {
  return x + y;
}

/**
 * Cria uma "salada de frutas" a partir de duas frutas informadas.
 * @param fruit1 - Primeira fruta
 * @param fruit2 - Segunda fruta
 * @returns void
 */
function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
  console.log(salad);
}

/**
 * Exibe uma mensagem de status um número definido de vezes.
 * @param status - Status que deve ser proclamado
 * @param repeat - Quantas vezes repetir a mensagem
 * @returns void
 */
function proclaim(status = 'not ready...', repeat = 1): void {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}
