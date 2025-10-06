function randomNumber() {
  return new Promise((res) =>
    setTimeout(() => res(Math.floor(Math.random() * 100) + 1), 1000)
  );
}
