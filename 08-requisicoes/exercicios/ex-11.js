fetch('https://dummyjson.com/products/1')
  .then((res) => res.json())
  .then((product) => console.log(product.title));
