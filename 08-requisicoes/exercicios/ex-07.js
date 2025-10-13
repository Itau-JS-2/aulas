Promise.resolve(10)
  .then((n) => n * 2)
  .then(() => {
    throw new Error('Erro proposital');
  })
  .catch((err) => console.log(err));

new Promise((res) => {
  res(10);
})
  .then((n) => n * 2)
  .then(() => {
    throw new Error('Erro proposital');
  })
  .catch((err) => console.log(err));
