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
    },
    {
      id: 78,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
    },
    {
      id: 98,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image:
        'https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
  ],
  products: [
    {
      id: 1,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image: hoddie,
    },
    {
      id: 2,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image: hoddie,
    },
    {
      id: 3,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image: hoddie,
    },
    {
      id: 4,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image: hoddie,
    },
    {
      id: 5,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image: hoddie,
    },
    {
      id: 6,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image: hoddie,
    },
    {
      id: 7,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image: hoddie,
    },
    {
      id: 8,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image: hoddie,
    },
    {
      id: 9,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image: hoddie,
    },
    {
      id: 10,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image: hoddie,
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
