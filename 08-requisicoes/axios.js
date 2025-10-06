import axios from 'axios';

axios
  .post('https://dummyjson.com/products/add', {
    title: 'Celular',
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log('Error', err.message);
  });

axios({
  method: 'get',
  url: 'https://dummyjson.com/products/add',
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log('Error', err.message);
  });

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  headers: {
    Authorization: '123',
  },
  params: {
    delay: 100,
  },
});

api.post('/products/add').then(console.log);

api.interceptors.request.use((config) => {
  config.headers.Authorization = '123';
  return config;
});

api.interceptors.response.use((response) => {
  console.log('Passou por aqui');
  config.headers.Authorization = '123';
  return response;
});
