// GET básico com fetch
fetch('https://dummyjson.com/products')
  .then((res) => res.json()) // transforma response em JSON
  .then((data) => console.log(data))
  .catch((err) => console.error('Erro no GET:', err));

// GET com parâmetros na URL
fetch('https://dummyjson.com/products/search?q=phone')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error('Erro no GET com params:', err));

// POST para criar recurso
fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ firstName: 'Santos', lastName: 'Dumont' }),
})
  .then((res) => res.json())
  .then((data) => console.log('POST:', data))
  .catch((err) => console.error('Erro no POST:', err));

// PUT para atualizar recurso
fetch('https://dummyjson.com/users/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ firstName: 'Santos', lastName: 'Dumont' }),
})
  .then((res) => res.json())
  .then((data) => console.log('PUT:', data))
  .catch((err) => console.error('Erro no PUT:', err));

// DELETE para remover recurso
fetch('https://dummyjson.com/users/1', { method: 'DELETE' })
  .then((res) => res.json())
  .then((data) => console.log('DELETE:', data))
  .catch((err) => console.error('Erro no DELETE:', err));

// Usando async/await com fetch
async function getProducts() {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    console.log('Async/Await GET:', data);
  } catch (err) {
    console.error('Erro Async/Await:', err);
  }
}

getProducts();
