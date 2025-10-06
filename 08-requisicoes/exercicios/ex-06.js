function saudacao(name) {
  return new Promise((res) => {
    setTimeout(() => {
      res(`Olá ${name}`), 1000;
    });
  });
}
