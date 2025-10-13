fetch('https://dummyjson.com/products/1')
  .then((res) => res.json())
  .then((data) => console.log(data.title))

  .then(() => fetch('https://dummyjson.com/products/2'))
  .then((res) => res.json())
  .then((data) => console.log(data.title))

  .then(() => fetch('https://dummyjson.com/products/3'))
  .then((res) => res.json())
  .then((data) => console.log(data.title));
