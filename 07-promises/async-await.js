async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!', 1000));
  });

  let result = await promise;

  console.log(result);
}

f();

var result = fetch('https://dummyjson.com/products')
  .then((result) => result.json())
  .then(console.log);

async function getProducts() {
  try {
    var response = await fetch('https://dummyjson.com/products');
    let result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
}
