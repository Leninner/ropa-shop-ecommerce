// En esta sección se importan las imágenes de los productos

import hoddie from '../assets/images/products/12.png';
import ka1 from '../assets/images/products/4.1.png';
import ka2 from '../assets/images/products/4.jpg';
import ka3 from '../assets/images/products/4.2.png';
import nw2 from '../assets/images/products/12.1.png';
// import akatsuki from '../assets/images/products/2.1.png';
// import akatsuki1 from '../assets/images/products/2.jpg';
// import akatsuki2 from '../assets/images/products/2.2.png';
// import nasa from '../assets/images/products/15.png';
// import nasa2 from '../assets/images/products/15.8.png';
// import nasa3 from '../assets/images/products/15.6.png';
// import snk from '../assets/images/products/6.png';
// import snk2 from '../assets/images/products/6.3.jpg';
// import snk3 from '../assets/images/products/6.1.png';
// import it from '../assets/images/products/8.png';
// import it2 from '../assets/images/products/8.1.jpg';
// import ita from '../assets/images/products/9.png';
// import ita2 from '../assets/images/products/9.2.jpg';
// import mon from '../assets/images/products/13.png';
// import mon2 from '../assets/images/products/13.3.jpg';
// import mon3 from '../assets/images/products/13.2.jpg';
// import co from '../assets/images/products/14.png';
// import co2 from '../assets/images/products/14.1.png';
// import co3 from '../assets/images/products/14.2.png';
// import lv from '../assets/images/products/18.png';
// import lv2 from '../assets/images/products/18.2.png';
// import lv3 from '../assets/images/products/18.1.png';
// import itach from '../assets/images/products/22.png';
// import chom from '../assets/images/products/25.png';
// import chom2 from '../assets/images/products/26.png';
// import chom3 from '../assets/images/products/26.1.png';
// import chom4 from '../assets/images/products/27.png';
// import chom5 from '../assets/images/products/28.png';
// import chom6 from '../assets/images/products/29.png';
// import chom7 from '../assets/images/products/30.png';
// import chom8 from '../assets/images/products/31.9.png';
// import chom9 from '../assets/images/products/31.png';
// import lev from '../assets/images/products/33.png';
// import nas from '../assets/images/products/34.png';
// import nas2 from '../assets/images/products/34.1.png';
// import nas3 from '../assets/images/products/34.2.png';
// import tommygris from '../assets/images/products/35.png';
// import tommyce from '../assets/images/products/36.png';
// import ameri from '../assets/images/products/37.png';
// import rojo from '../assets/images/products/41.png';
// import rojo2 from '../assets/images/products/41.1.png';
// import redbull from '../assets/images/products/42.png';
// import tommyne from '../assets/images/products/43.png';
// import chicag from '../assets/images/products/100.png';

/**
 * @description Este es el estado global de la tienda
 * @instructions La forma que debe tener la información de cada producto es la siguiente:
 * {
      id: createUniqueID()01,
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [hoddie, hoddie, nw2],
      tallas: {
        S: {
          stock: 15,
          cantidad: 1,
        },
        M: {
          stock: 15,
          cantidad: 1,
        },
        L: {
          stock: 0,
          cantidad: 1,
        },
      },
      category: 'sudaderas',
    },
 */

const createUniqueID = () => Math.random().toString(36).substr(2, 9);

export const productsData = {
  byCategory: [],
  cart: [],
  bestSellers: [
    {
      id: createUniqueID(),
      name: 'Sudadera New York',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [hoddie, hoddie, nw2],
      tallas: {
        S: {
          stock: 15,
          cantidad: 1,
        },
        M: {
          stock: 15,
          cantidad: 1,
        },
        L: {
          stock: 0,
          cantidad: 1,
        },
      },
      category: 'sudaderas',
    },
  ],
  products: [
    {
      id: createUniqueID(),
      name: 'Sudadera de Kakashi',
      price: 15,
      description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
      images: [ka1, ka2, ka3],
      tallas: {
        S: {
          stock: 15,
          cantidad: 1,
        },
        M: {
          stock: 15,
          cantidad: 1,
        },
        L: {
          stock: 15,
          cantidad: 1,
        },
      },
      category: 'sudaderas',
    },
  ],
};

// bestSellers: [
//     {
//       id: createUniqueID(),
//       name: 'Sudadera New York',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [hoddie, hoddie, nw2],
//       cantidad: 1,
//       tallas: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },
//     {
//       id: createUniqueID(),
//       name: 'Sudadera Akatsuki',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [akatsuki, akatsuki1, akatsuki2],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },
//     {
//       id: createUniqueID(),
//       name: 'Sudadera Nasa',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [nasa, nasa2, nasa3],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },
//   ],
//   products: [
//     {
//       id: createUniqueID()//       name: 'Sudadera de Kakashi',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [ka1, ka2, ka3],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },

//     {
//       id: createUniqueID()//       name: 'Sudadera De SNK',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad, Color Gris',
//       images: [snk, snk2, snk3],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },
//     {
//       id: createUniqueID()//       name: 'Sudadera De Itachi ',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [it, it, it2],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },
//     {
//       id: createUniqueID()//       name: 'Sudadera De Itachi 2',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [ita, ita, ita2],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },

//     {
//       id: createUniqueID()
//       name: 'Sudadera Monster',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [mon, mon2, mon3],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },
//     {
//       id: createUniqueID()
//       name: 'Sudadera Cobra Cai',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [co, co2, co3],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },

//     {
//       id: createUniqueID()
//       name: 'Sudadera Levi',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [lv, lv2, lv3],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },

//     {
//       id: createUniqueID()
//       name: 'Sudadera Itachi 3',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [itach, itach, itach],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },

//     {
//       id: createUniqueID()
//       name: 'Sudadera Levi a Color',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [lev, lev, lev],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },
//     {
//       id: createUniqueID()
//       name: 'Sudadera Nasa Negra',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad, Color Negro',
//       images: [nas, nas2, nas3],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },
//     {
//       id: createUniqueID()
//       name: 'Tommy Hilfiger Gris',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [tommygris, tommygris, tommygris],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },
//     {
//       id: createUniqueID()
//       name: 'Tommy Hilfiger Celeste',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [tommyce, tommyce, tommyce],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },
//     {
//       id: createUniqueID()
//       name: 'Sudadera American Eagle ',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [ameri, ameri, ameri],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },

//     {
//       id: createUniqueID()
//       name: 'Sudadera The Coutere',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [rojo, rojo, rojo2],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },
//     {
//       id: createUniqueID()
//       name: 'Sudadera RedBull',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [redbull, redbull, redbull],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },
//     {
//       id: createUniqueID()
//       name: 'Tommy Hilfiger Negra',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [tommyne, tommyne, tommyne],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'sudaderas',
//       stock: true,
//     },

//     //pantalon//
//     {
//       id: createUniqueID()
//       name: 'Pantalones',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [hoddie, hoddie, hoddie],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'pantalones',
//       stock: true,
//     },

//     //camiseta//

//     {
//       id: createUniqueID(),
//       name: 'Camiseta Chicago Bulls ',
//       price: 7,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [chicag, chicag, chicag],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'camisetas',
//       stock: true,
//     },

//     //Chompas//

//     {
//       id: createUniqueID(),
//       name: 'Chompa Colombiana ',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [chom, chom, chom],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'chompas',
//       stock: true,
//     },
//     {
//       id: createUniqueID(),
//       name: 'Chompa Colombiana ',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [chom2, chom2, chom3],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'chompas',
//       stock: true,
//     },
//     {
//       id: createUniqueID(),
//       name: 'Chompa Colombiana ',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [chom4, chom4, chom4],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'chompas',
//       stock: true,
//     },
//     {
//       id: createUniqueID(),
//       name: 'Chompa Colombiana ',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [chom5, chom5, chom5],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'chompas',
//       stock: true,
//     },
//     {
//       id: createUniqueID(),
//       name: 'Chompa Colombiana ',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [chom6, chom6, chom6],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'chompas',
//       stock: true,
//     },
//     {
//       id: createUniqueID(),
//       name: 'Chompa Colombiana ',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [chom7, chom7, chom7],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'chompas',
//       stock: true,
//     },
//     {
//       id: createUniqueID(),
//       name: 'Chompa Colombiana ',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [chom8, chom8, chom8],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'chompas',
//       stock: true,
//     },
//     {
//       id: createUniqueID(),
//       name: 'Chompa Colombiana ',
//       price: 15,
//       description: 'Sudaderas con capucha estilos únicos y de excelente calidad',
//       images: [chom9, chom9, chom9],
//       cantidad: 1,
//       talla: 'S',
//       categorie: 'chompas',
//       stock: true,
//     },
//   ],
