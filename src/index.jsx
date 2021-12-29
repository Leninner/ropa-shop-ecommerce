import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { reducer } from './reducers';
import hoddie from './assets/images/products/hoodie-newyork.jpeg';
import hoddiePrueba from './assets/images/products/hoodie-prueba.jpeg';

const initialState = {
  cart: [],
  bestSellers: [
    {
      id: 546,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [hoddie, hoddiePrueba, 'https://picsum.photos/200/300'],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
    },
    {
      id: 78,
      name: 'Crop Top',
      price: 105,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        hoddie,
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
    },
    {
      id: 98,
      name: 'Anime Shop',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        hoddie,
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
    },
  ],
  products: [
    {
      id: 1,
      name: 'Main Clothing',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        hoddie,
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
    },
    {
      id: 2,
      name: 'Hoodie Bonito',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        hoddie,
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
    },
    {
      id: 3,
      name: 'Ropa bonita',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        hoddie,
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
    },
    {
      id: 4,
      name: 'Cuesta 200',
      price: 25,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        hoddie,
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
    },
    {
      id: 5,
      name: 'Que parió hoodie',
      price: 100,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        hoddie,
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
    },
    {
      id: 6,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        hoddie,
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
    },
    {
      id: 7,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        hoddie,
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
    },
    {
      id: 8,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        hoddie,
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
    },
    {
      id: 9,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        hoddie,
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
    },
    {
      id: 10,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        hoddie,
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
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
