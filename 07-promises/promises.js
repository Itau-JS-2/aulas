// Criando uma Promise manualmente
let promise = new Promise(function (resolve, reject) {
  // executor: executa automaticamente ao criar a Promise
  // resolve -> sucesso | reject -> erro
  setTimeout(() => resolve('done'), 1000); // resolve após 1 segundo
});

// Consumindo a Promise
promise.then(
  (result) => console.log('Sucesso:', result), // executa se a promise for resolvida
  (error) => console.log('Erro:', error) // executa se for rejeitada
);

// Tratando erros separadamente
promise.catch((error) => console.log('Capturado no catch:', error));

// Código que roda sempre, independente do resultado
promise.finally(() => console.log('Sempre executa (finally)'));

// Exemplo real com fetch (também retorna uma Promise)
const result = fetch('https://dummyjson.com/products');

// Convertendo resposta para JSON e exibindo os dados
result
  .then((res) => res.json())
  .then((data) => console.log('Produtos:', data))
  .catch((err) => console.error('Erro no fetch:', err));
