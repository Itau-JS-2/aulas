let promise = new Promise((res) => res(10));

promise
  .then((num) => num * 5)
  .then(console.log)
  .catch(console.error);
