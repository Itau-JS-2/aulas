function isEvent(number) {
  return new Promise((resolve, reject) => {
    number % 2 === 0 ? resolve('Par') : reject('Ímpar');
  });
}
