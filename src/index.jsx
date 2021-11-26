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
      image: hoddie,
    },
    {
      id: 98,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      image: hoddie,
    },
  ],
  womens: [
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
  ],
  mens: [
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
