import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { reducer } from './reducers';
import hoddie from './assets/images/products/12.png';
import nw2 from './assets/images/products/12.1.png';
import akatsuki from './assets/images/products/2.1.png';
import akatsuki2 from './assets/images/products/2.2.png';
import akatsuki1 from './assets/images/products/2.jpg';
import nasa from './assets/images/products/15.png';
import nasa2 from './assets/images/products/15.8.png';
import nasa3 from './assets/images/products/15.6.png';
import tommyazul from './assets/images/products/1.1.jpeg';
import tommyazul2 from './assets/images/products/1.jpg';
import holi1 from './assets/images/products/3.png';
import holi2 from './assets/images/products/3.2.jpg';
import holi3 from './assets/images/products/3.1.png';
import ka1 from './assets/images/products/4.1.png';
import ka2 from './assets/images/products/4.jpg';
import ka3 from './assets/images/products/4.1.png';









const initialState = {
  byCategory: [],
  cart: [],
  bestSellers: [
    {
      id: 501,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [hoddie, nw2, hoddie],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 502,
      name: 'Sudadera Akatsuki',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [akatsuki, akatsuki2, akatsuki1],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 503,
      name: 'Sudadera Nasa',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [nasa, nasa2, nasa3],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
  ],
  products: [
    {
      id: 1,
      name: 'Tommy Hilfiger azul',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [tommyazul, tommyazul2, tommyazul],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: false,
    },
    {
      id: 2,
      name: 'Sudadera Hollister',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad, COLOR CONCHEVINO',
      images: [
        holi1,holi2,holi3 ],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: false,
    },
    {
      id: 3,
      name: 'Sudadera de Kakashi',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        ka1,ka2,ka3],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: false,
    },
    {
      id: 4,
      name: 'Sudadera',
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
      stock: true,
    },
    {
      id: 5,
      name: 'Sudadera',
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
      stock: true,
    },
    {
      id: 6,
      name: 'Sudadera',
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
      stock: true,
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
      stock: true,
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
      stock: true,
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
      stock: true,
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
      stock: true,
    },
    {
      id: 11,
      name: 'Pantalones',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'pantalones',
      stock: true,
    },
    {
      id: 12,
      name: 'Pantalones',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'pantalones',
      stock: true,
    },
    {
      id: 13,
      name: 'Pantalones',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'pantalones',
      stock: true,
    },
    {
      id: 14,
      name: 'Pantalones',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'pantalones',
      stock: true,
    },
    {
      id: 15,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'pantalones',
      stock: true,
    },
    {
      id: 16,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'pantalones',
      stock: true,
    },
    {
      id: 17,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'pantalones',
      stock: true,
    },
    {
      id: 18,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'pantalones',
      stock: true,
    },
    {
      id: 19,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1607773716753-b00093cb857f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'camisetas',
      stock: true,
    },
    {
      id: 20,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1607773716753-b00093cb857f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'camisetas',
      stock: true,
    },
    {
      id: 21,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1607773716753-b00093cb857f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'camisetas',
      stock: true,
    },
    {
      id: 22,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1607773716753-b00093cb857f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'camisetas',
      stock: true,
    },
    {
      id: 23,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1607773716753-b00093cb857f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'camisetas',
      stock: true,
    },
    {
      id: 24,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1607773716753-b00093cb857f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'camisetas',
      stock: true,
    },
    {
      id: 25,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1607773716753-b00093cb857f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'camisetas',
      stock: true,
    },
    {
      id: 26,
      name: 'Sudadera New York',
      price: 10,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1607773716753-b00093cb857f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'camisetas',
      stock: true,
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
