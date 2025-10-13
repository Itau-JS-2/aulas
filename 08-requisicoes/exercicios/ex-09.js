function delayedMessage(message) {
  console.log('Carregando...');
  return new Promise((resolve) => setTimeout(() => resolve(message), 1000));
}

delayedMessage('Pronto!').then(console.log);
