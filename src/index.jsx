import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { reducer } from './reducers';
import hoddie from './assets/images/products/12.png';
import nw2 from './assets/images/products/12.1.png';
import akatsuki from './assets/images/products/2.1.png';
import akatsuki1 from './assets/images/products/2.jpg';
import akatsuki2 from './assets/images/products/2.2.png';
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
import ka3 from './assets/images/products/4.2.png';
import pa from './assets/images/products/5.png';
import pa2 from './assets/images/products/5.1.jpg';
import pa3 from './assets/images/products/5.2.png';
import snk from './assets/images/products/6.png';
import snk2 from './assets/images/products/6.3.jpg';
import snk3 from './assets/images/products/6.1.png';
import pu from './assets/images/products/7.png';
import pu2 from './assets/images/products/7.1.jpg';
import pu3 from './assets/images/products/7.2.jpg';
import it from './assets/images/products/8.png';
import it2 from './assets/images/products/8.1.jpg';
import ita from './assets/images/products/9.png';
import ita2 from './assets/images/products/9.2.jpg';
import itac from './assets/images/products/11.png';
import itac2 from './assets/images/products/11.1.jpg';
import tomr from './assets/images/products/10.png';
import tomr2 from './assets/images/products/10.1.jpg';
import mon from './assets/images/products/13.png';
import mon2 from './assets/images/products/13.3.jpg';
import mon3 from './assets/images/products/13.2.jpg';
import co from './assets/images/products/14.png';
import co2 from './assets/images/products/14.1.png';
import co3 from './assets/images/products/14.2.png';
import sp from './assets/images/products/16.png';
import sp2 from './assets/images/products/16.1.jpg';
import ck from './assets/images/products/17.png';
import ck2 from './assets/images/products/17.1.jpg';
import lv from './assets/images/products/18.png';
import lv2 from './assets/images/products/18.2.png';
import lv3 from './assets/images/products/18.1.png';
import ktm from './assets/images/products/19.png';
import ktm2 from './assets/images/products/19.1.jpg';
import ktm3 from './assets/images/products/19.2.jpg';
import rym from './assets/images/products/20.png';
import ckn from './assets/images/products/21.png';
import itach from './assets/images/products/22.png';
import pum from './assets/images/products/23.png';
import spd from './assets/images/products/24.png';
import chom from './assets/images/products/25.png';
import chom2 from './assets/images/products/26.png';
import chom3 from './assets/images/products/26.1.png';
import chom4 from './assets/images/products/27.png';












const initialState = {
  byCategory: [],
  cart: [],
  bestSellers: [
    {
      id: 501,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [hoddie, hoddie, nw2],
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
      images: [tommyazul, tommyazul, tommyazul2],
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
      images: [snk, snk2, snk3],
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
      images: [it, it, it2],
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
      images: [ita, ita, ita2],
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
      images: [itac, itac, itac2],
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
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 13,
      name: 'Sudadera Spiderman',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [sp, sp, sp2],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 14,
      name: 'Sudadera Calvin Klein',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [ck, ck, ck2],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: false,
    },
    {
      id: 15,
      name: 'Sudadera Levi',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [lv, lv2, lv3],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 16,
      name: 'Sudadera KTM',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [ktm, ktm2, ktm3],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 17,
      name: 'Sudadera Rick y Morty',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [rym, rym, rym],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 18,
      name: 'Sudadera Calvin Klein',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [ckn, ckn, ckn],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },{
      id: 19,
      name: 'Sudadera Itachi 3',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [itach, itach, itach],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },{
      id: 20,
      name: 'Sudadera Puma Gris',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [pum, pum, pum],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },{
      id: 21,
      name: 'Sudadera Spiderman 2',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [spd, spd, spd],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },{
      id: 22,
      name: 'Sudadera Levi a Color',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [hoddie, hoddie, hoddie],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    //pantalon//
    {
      id: 23,
      name: 'Pantalones',
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
      id: 24,
      name: 'Camisetas',
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
      id: 25,
      name: 'Chompas Colombiana ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [chom,chom,chom ],
      cantidad: 1,
      talla: 'S',
      categorie: 'chompas',
      stock: true,
    },
    {
      id: 26,
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [chom2,chom2,chom3 ],
      cantidad: 1,
      talla: 'S',
      categorie: 'chompas',
      stock: true,
    },{
      id: 27,
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [chom4,chom4,chom4 ],
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
