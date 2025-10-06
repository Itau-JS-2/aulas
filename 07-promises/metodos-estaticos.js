// Promise.all()
// Espera TODAS as promises terminarem com sucesso
// Se todas resolvem, retorna um array com os valores na ordem do array original
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // termina em 3s
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // termina em 2s
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // termina em 1s
]).then(console.log); // → [1, 2, 3]

// Também aceita valores síncronos
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  2, // valor normal
  3, // valor normal
]).then(console.log); // → [1, 2, 3]

// Se qualquer Promise rejeitar, o all() rejeita imediatamente
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Opa!')), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
]).catch(console.error); // → Error: Opa!

// Promise.allSettled()
// Diferente do all(), ele espera TODAS finalizarem (sucesso ou erro)
// Retorna status + value/reason de cada promise
Promise.allSettled([
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Opa!')), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
]).then(console.log);
/*
→ [
  {status: 'fulfilled', value: 1},
  {status: 'rejected', reason: Error: Opa!},
  {status: 'fulfilled', value: 3}
]
*/

// Promise.race()
// Retorna o resultado da PRIMEIRA promise que finalizar (sucesso ou erro)
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Whoops!')), 2000)
  ),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
]).then(console.log); // → 1 (a primeira a resolver)

// Promise.any()
// Parecido com race, mas só resolve com a primeira que SUCEDER
// Se todas falharem, lança um AggregateError
Promise.any([
  new Promise((_, reject) => setTimeout(() => reject(new Error('Opa!')), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
]).then(console.log); // → 1 (primeira que deu certo)

Promise.any([
  new Promise((_, reject) => setTimeout(() => reject(new Error('Ai!')), 1000)),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Error!')), 2000)
  ),
]).catch((error) => {
  console.log(error.constructor.name); // → AggregateError
  console.log(error.errors[0]); // → Error: Ai!
  console.log(error.errors[1]); // → Error: Error!
});
