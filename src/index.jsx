import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { reducer } from './reducers';
import hoddie from './assets/images/products/hoodie-newyork.jpeg';

const initialState = {
  cart: [],
  bestSellers: [
    {
      id: 546,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image: hoddie,
      cantidad: 1,
      talla: 'S',
    },
    {
      id: 78,
      name: 'Crop Top',
      price: 105,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
      cantidad: 1,
      talla: 'S',
    },
    {
      id: 98,
      name: 'Anime Shop',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      cantidad: 1,
      talla: 'S',
    },
  ],
  products: [
    {
      id: 1,
      name: 'Main Clothing',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9wYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      cantidad: 1,
      talla: 'S',
    },
    {
      id: 2,
      name: 'Hoodie Bonito',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://images.unsplash.com/photo-1607952108929-b87d6c9951e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9wYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      cantidad: 1,
      talla: 'S',
    },
    {
      id: 3,
      name: 'Ropa bonita',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://images.unsplash.com/photo-1607952108806-b0ad4c7317ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cm9wYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      cantidad: 1,
      talla: 'S',
    },
    {
      id: 4,
      name: 'Cuesta 200',
      price: 25,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://images.unsplash.com/photo-1596448822552-e6a2420b9c30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9wYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      cantidad: 1,
      talla: 'S',
    },
    {
      id: 5,
      name: 'Que parió hoodie',
      price: 100,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://images.unsplash.com/photo-1567035861420-2126e2624dd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvcGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      cantidad: 1,
      talla: 'S',
    },
    {
      id: 6,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://images.unsplash.com/photo-1633292587737-f898a032e562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvcGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      cantidad: 1,
      talla: 'S',
    },
    {
      id: 7,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://images.unsplash.com/photo-1607644735254-49d280b291eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJvcGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      cantidad: 1,
      talla: 'S',
    },
    {
      id: 8,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://images.unsplash.com/photo-1500258593672-b080c40f4b02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJvcGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      cantidad: 1,
      talla: 'S',
    },
    {
      id: 9,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      cantidad: 1,
      talla: 'S',
    },
    {
      id: 10,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://images.unsplash.com/photo-1565548058654-6ba93b5e3135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      cantidad: 1,
      talla: 'S',
    },
  ],
};

//conect redux and redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AppStore = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
