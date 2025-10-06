// Exemplo 1: URL errada -> o fetch falha e cai no catch
fetch('https://dummyjson.com/productss/3')
  .then((res) => res.json())
  .then(console.log) // não será chamado porque a URL está errada
  .catch((err) => console.log(err)); // captura o erro

// Exemplo 2: Mesmo com URL certa, o throw força o catch
fetch('https://dummyjson.com/products/3')
  .then((res) => {
    throw new Error('Hello world'); // erro lançado manualmente
  })
  .catch((err) => console.log(err)); // intercepta o erro

// Exemplo 3: Catch pode gerar novo erro, tratado pelo próximo catch
fetch('https://dummyjson.com/products/3')
  .then((res) => {
    throw new Error('Hello world'); // erro inicial
  })
  .catch((err) => {
    throw new Error('Segundo erro'); // gera outro erro
  })
  .then(() => console.log('Oi, eu sou um then!')) // pulado por causa do erro
  .catch((err) => console.log('Segundo catch', err)); // trata o novo erro
