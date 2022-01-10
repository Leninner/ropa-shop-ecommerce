import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { reducer } from './reducers';
import hoddie from './assets/images/products/15.6-min.png';
import nw2 from './assets/images/products/15.6-min.png';
import akatsuki from './assets/images/products/2.1-min.png';
import akatsuki2 from './assets/images/products/2.2-min.png';
import akatsuki1 from './assets/images/products/2-min.jpg';
import nasa from './assets/images/products/15-min.png';
import nasa2 from './assets/images/products/15.8-min.png';
import nasa3 from './assets/images/products/15.6-min.png';
import tommyazul from './assets/images/products/1.1-min.jpeg';
import tommyazul2 from './assets/images/products/1-min.jpg';
import holi1 from './assets/images/products/3-min.png';
import holi2 from './assets/images/products/3.2-min.jpg';
import holi3 from './assets/images/products/3.1-min.png';
import ka1 from './assets/images/products/4.1-min.png';
import ka2 from './assets/images/products/4-min.jpg';
import ka3 from './assets/images/products/4.2-min.png';
import pa from './assets/images/products/5-min.png';
import pa2 from './assets/images/products/5.1-min.jpg';
import pa3 from './assets/images/products/5.2-min.png';
import snk from './assets/images/products/6-min.png';
import snk2 from './assets/images/products/6.1-min.png';
import snk3 from './assets/images/products/6.3-min.jpg';
import pu from './assets/images/products/15.6-min.png';
import pu2 from './assets/images/products/7.1-min.jpg';
import pu3 from './assets/images/products/7.2-min.jpg';
import it2 from './assets/images/products/15.6-min.png';
import it from './assets/images/products/15.6-min.png';
import ita from './assets/images/products/15.6-min.png';
import ita2 from './assets/images/products/15.6-min.png';
import itac from './assets/images/products/15.6-min.png';
import itac2 from './assets/images/products/15.6-min.png';
import tomr from './assets/images/products/15.6-min.png';
import tomr2 from './assets/images/products/15.6-min.png';
import mon from './assets/images/products/15.6-min.png';
import mon2 from './assets/images/products/15.6-min.png';
import mon3 from './assets/images/products/15.6-min.png';
import co from './assets/images/products/15.6-min.png';
import co2 from './assets/images/products/15.6-min.png';
import co3 from './assets/images/products/15.6-min.png';
import sp from './assets/images/products/16-min.png';
import sp2 from './assets/images/products/16.1-min.jpg';

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
      images: [akatsuki, akatsuki1, akatsuki2],
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
      name: 'Tommy Hilfiger Azul',
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
      images: [holi1, holi2, holi3],
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
      images: [ka1, ka2, ka3],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 4,
      name: 'Sudadera De Pain',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [pa, pa2, pa3],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 5,
      name: 'Sudadera De SNK',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad, Color Gris',
      images: [snk, snk3, snk2],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 6,
      name: 'Sudadera Puma',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad, Color Mostaza',
      images: [pu, pu2, pu3],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: false,
    },
    {
      id: 7,
      name: 'Sudadera De Itachi ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [it, it2, it],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 8,
      name: 'Sudadera De Itachi 2',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [ita, ita2, ita],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 9,
      name: 'Sudadera Itachi 3',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [itac, itac2, itac],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 10,
      name: 'Tommy Hilfiger Roja',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [tomr, tomr2, tomr],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: false,
    },
    {
      id: 11,
      name: 'Sudadera Monster',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [mon, mon2, mon3],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 12,
      name: 'Sudadera Cobra Cai',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [co, co2, co3],
      cantidad: 1,
      talla: 'S',
      categorie: 'Sudadera',
      stock: true,
    },
    {
      id: 13,
      name: 'Sudadera Spiderman',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [sp, sp2, sp],
      cantidad: 1,
      talla: 'S',
      categorie: 'Sudadera',
      stock: true,
    },
    //pantalon//
    {
      id: 14,
      name: 'Sudadera New York',
      price: 15,
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

    //camiseta//

    {
      id: 15,
      name: 'Sudadera New York',
      price: 15,
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

    //Chompas//

    {
      id: 16,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [
        'https://images.unsplash.com/photo-1607773716753-b00093cb857f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=170667a&w=0&h=xBR4ZQbRC1Ub_5u_pZnG-omh0k-W8QDQgXxda5MCDT8=',
        'https://picsum.photos/200/300',
      ],
      cantidad: 1,
      talla: 'S',
      categorie: 'chompas',
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
