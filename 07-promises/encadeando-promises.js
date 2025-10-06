// Exemplo de encadeamento de Promises
new Promise((res, rej) => {
  setTimeout(() => res(1), 1000);
})
  .then((result) => {
    console.log(result); // 1
    return result * 2; // retorna para o próximo then
  })
  .then((result) => {
    console.log(result); // 2
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 4
  });

// Exemplo sem encadeamento (cada then é independente)
let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise1.then(function (result) {
  console.log(result); // 1
  return result * 2;
});

promise1.then(function (result) {
  console.log(result); // 1
  return result * 2;
});

promise1.then(function (result) {
  console.log(result); // 1
  return result * 2;
});

// Retornando Promises dentro de then
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    console.log(result); // 1
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then((result) => {
    console.log(result); // 2
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then((result) => {
    console.log(result); // 4
  });

// Função que retorna uma Promise com fetch
function loadData(url) {
  return fetch(url).then((res) => res.json());
}

// Encadeando requisições com loadData
loadData('https://dummyjson.com/products/1')
  .then((res) => {
    console.log(res);
    return loadData('https://dummyjson.com/products/2');
  })
  .then((res) => {
    console.log(res);
    return loadData('https://dummyjson.com/products/3');
  })
  .then((res) => {
    console.log(res);
  });
