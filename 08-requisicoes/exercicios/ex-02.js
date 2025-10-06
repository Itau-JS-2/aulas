let promise = new Promise((_, rej) => {
  setTimeout(() => rej('Olá mundo', 1000));
});
