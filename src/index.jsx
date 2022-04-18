import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { reducer } from './reducers';
import bad1 from './assets/images/products/bad1.jpeg';
import bad2 from './assets/images/products/bad2.jpeg';
import bad3 from './assets/images/products/bad3.jpeg';
import ama from './assets/images/products/ama1.jpeg';
import ama2 from './assets/images/products/ama2.jpeg';
import ama3 from './assets/images/products/ama3.jpeg';
import az from './assets/images/products/azu1.jpeg';
import az2 from './assets/images/products/azu2.jpeg';
import az3 from './assets/images/products/azu3.jpeg';
import ba from './assets/images/products/bal1.jpeg';
import ba2 from './assets/images/products/bal2.jpeg';
import ba3 from './assets/images/products/bal3.jpeg';
import gap from './assets/images/products/gap1.jpeg';
import gap2 from './assets/images/products/gap2.jpeg';
import gap3 from './assets/images/products/gap3.jpeg';
import jes from './assets/images/products/jes1.jpeg';
import jes2 from './assets/images/products/jes2.jpeg';
import jes3 from './assets/images/products/jes3.jpeg';
import mad1 from './assets/images/products/mad1.jpeg';
import mad2 from './assets/images/products/mad2.jpeg';
import mad3 from './assets/images/products/mad3.jpeg';
import under from './assets/images/products/uner1.jpeg';
import under from './assets/images/products/under2.jpeg';

import akatsuki from './assets/images/products/2.1.png';
import akatsuki1 from './assets/images/products/2.jpg';
import akatsuki2 from './assets/images/products/2.2.png';
import nasa from './assets/images/products/15.png';
import nasa2 from './assets/images/products/15.8.png';
import nasa3 from './assets/images/products/15.6.png';
import ka1 from './assets/images/products/4.1.png';
import ka2 from './assets/images/products/4.jpg';
import ka3 from './assets/images/products/4.2.png';
import snk from './assets/images/products/6.png';
import snk2 from './assets/images/products/6.3.jpg';
import snk3 from './assets/images/products/6.1.png';
import mon from './assets/images/products/13.png';
import mon2 from './assets/images/products/13.3.jpg';
import mon3 from './assets/images/products/13.2.jpg';
import co from './assets/images/products/14.png';
import co2 from './assets/images/products/14.1.png';
import co3 from './assets/images/products/14.2.png';
import lv from './assets/images/products/18.png';
import lv2 from './assets/images/products/18.2.png';
import lv3 from './assets/images/products/18.1.png';
import itach from './assets/images/products/22.png';
import chom from './assets/images/products/25.png';
import chom2 from './assets/images/products/26.png';
import chom3 from './assets/images/products/26.1.png';
import chom4 from './assets/images/products/27.png';
import chom5 from './assets/images/products/28.png';
import chom6 from './assets/images/products/29.png';
import chom7 from './assets/images/products/30.png';
import chom8 from './assets/images/products/31.9.png';
import chom9 from './assets/images/products/31.png';
import lev from './assets/images/products/33.png';
import nas from './assets/images/products/34.png';
import nas2 from './assets/images/products/34.1.png';
import nas3 from './assets/images/products/34.2.png';
import tommygris from './assets/images/products/35.png';
import tommyce from './assets/images/products/36.png';
import ameri from './assets/images/products/37.png';
import rojo from './assets/images/products/41.png';
import rojo2 from './assets/images/products/41.1.png';
import redbull from './assets/images/products/42.png';
import tommyne from './assets/images/products/43.png';
import chicag from './assets/images/products/100.png';

const initialState = {
  byCategory: [],
  cart: [],
  bestSellers: [
    {
      id: 501,
      name: 'HOODIE BAD BUNNY',
      price: 15,
      description: 'Hoodie de BAD BUNNY, 98% poliester 8% algodon, talla americana',
      images: [bad1, bad2, bad3],
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
      id: 5,
      name: 'HOODIE',
      price: 15,
      description: 'Hoodie talla americana  98% poliéster y 8% algodón',
                    '📦Entregas 100% seguras',
                    '🚚Envió gratis a nivel nacional (Servientrega)',
      images: [ama, ama2, ama3],
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
      id: 19,
      name: 'Sudadera Itachi 3',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [itach, itach, itach],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },

    {
      id: 22,
      name: 'Sudadera Levi a Color',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [lev, lev, lev],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 23,
      name: 'Sudadera Nasa Negra',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad, Color Negro',
      images: [nas, nas2, nas3],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 24,
      name: 'Tommy Hilfiger Gris',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [tommygris, tommygris, tommygris],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 25,
      name: 'Tommy Hilfiger Celeste',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [tommyce, tommyce, tommyce],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 26,
      name: 'Sudadera American Eagle ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [ameri, ameri, ameri],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },

    {
      id: 30,
      name: 'Sudadera The Coutere',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [rojo, rojo, rojo2],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 31,
      name: 'Sudadera RedBull',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [redbull, redbull, redbull],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },
    {
      id: 32,
      name: 'Tommy Hilfiger Negra',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [tommyne, tommyne, tommyne],
      cantidad: 1,
      talla: 'S',
      categorie: 'sudaderas',
      stock: true,
    },

    //pantalon//
    {
      id: 50,
      name: 'Pantalones',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [hoddie, hoddie, hoddie],
      cantidad: 1,
      talla: 'S',
      categorie: 'pantalones',
      stock: true,
    },

    //camiseta//

    {
      id: 100,
      name: 'Camiseta Chicago Bulls ',
      price: 7,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [chicag, chicag, chicag],
      cantidad: 1,
      talla: 'S',
      categorie: 'camisetas',
      stock: true,
    },

    //Chompas//

    {
      id: 150,
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [chom, chom, chom],
      cantidad: 1,
      talla: 'S',
      categorie: 'chompas',
      stock: true,
    },
    {
      id: 151,
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [chom2, chom2, chom3],
      cantidad: 1,
      talla: 'S',
      categorie: 'chompas',
      stock: true,
    },
    {
      id: 152,
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [chom4, chom4, chom4],
      cantidad: 1,
      talla: 'S',
      categorie: 'chompas',
      stock: true,
    },
    {
      id: 153,
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [chom5, chom5, chom5],
      cantidad: 1,
      talla: 'S',
      categorie: 'chompas',
      stock: true,
    },
    {
      id: 154,
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [chom6, chom6, chom6],
      cantidad: 1,
      talla: 'S',
      categorie: 'chompas',
      stock: true,
    },
    {
      id: 155,
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [chom7, chom7, chom7],
      cantidad: 1,
      talla: 'S',
      categorie: 'chompas',
      stock: true,
    },
    {
      id: 156,
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [chom8, chom8, chom8],
      cantidad: 1,
      talla: 'S',
      categorie: 'chompas',
      stock: true,
    },
    {
      id: 157,
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [chom9, chom9, chom9],
      cantidad: 1,
      talla: 'S',
      categorie: 'chompas',
      stock: true,
    },
  ],
};

//conect redux and redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const AppStore = createStore(reducer, productsData, composeEnhancers());

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
