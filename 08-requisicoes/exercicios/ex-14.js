fetch('https://dummyjson.com/products/9999')
  .then((res) => {
    if (!res.ok) throw new Error('Produto não encontrado');
    return res.json();
  })
  .then(console.log)
  .catch((err) => console.error('Error:', err.message));
