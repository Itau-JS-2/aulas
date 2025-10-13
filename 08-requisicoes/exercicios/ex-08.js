Promise.resolve('OK')
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log('Operação concluída'));

Promise.reject('Erro')
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log('Operação concluída'));
