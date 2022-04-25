// En esta sección se importan las imágenes de los productos

import bad1 from '../assets/images/products/bad1.jpeg';
import bad2 from '../assets/images/products/bad2.jpeg';
import bad3 from '../assets/images/products/bad3.jpeg';
import ama from '../assets/images/products/ama1.jpeg';
import ama2 from '../assets/images/products/ama2.jpeg';
import ama3 from '../assets/images/products/ama3.jpeg';
import az from '../assets/images/products/azu1.jpeg';
import az2 from '../assets/images/products/azu2.jpeg';
import az3 from '../assets/images/products/azu3.jpeg';
import ba from '../assets/images/products/bal1.jpeg';
import ba2 from '../assets/images/products/bal2.jpeg';
import ba3 from '../assets/images/products/bal3.jpeg';
import gap from '../assets/images/products/gap1.jpeg';
import gap2 from '../assets/images/products/gap2.jpeg';
import gap3 from '../assets/images/products/gap3.jpeg';
import jes from '../assets/images/products/jes1.jpeg';
import jes2 from '../assets/images/products/jes2.jpeg';
import jes3 from '../assets/images/products/jes3.jpeg';
import mad1 from '../assets/images/products/mad1.jpeg';
import mad2 from '../assets/images/products/mad2.jpeg';
import mad3 from '../assets/images/products/mad3.jpeg';
import under from '../assets/images/products/under1.jpeg';
import under2 from '../assets/images/products/under2.jpeg';
import azub1 from '../assets/images/products/50.jpeg';
import azub2 from '../assets/images/products/51.jpeg';
import azub3 from '../assets/images/products/53.jpeg';
import balr from '../assets/images/products/balr.jpeg';
import balr2 from '../assets/images/products/balr2.jpeg';
import balr3 from '../assets/images/products/balr3.jpeg';
import bull from '../assets/images/products/bulls.jpeg';
import bull2 from '../assets/images/products/bulls2.jpeg';
import bull3 from '../assets/images/products/bulls3.jpeg';
import akatsuki from '../assets/images/products/2.1.png';
import akatsuki1 from '../assets/images/products/2.jpg';
import akatsuki2 from '../assets/images/products/2.2.png';
import nasa from '../assets/images/products/15.png';
import nasa2 from '../assets/images/products/15.8.png';
import nasa3 from '../assets/images/products/15.6.png';
import ka1 from '../assets/images/products/4.1.png';
import ka2 from '../assets/images/products/4.jpg';
import ka3 from '../assets/images/products/4.2.png';
import snk from '../assets/images/products/6.png';
import snk2 from '../assets/images/products/6.3.jpg';
import snk3 from '../assets/images/products/6.1.png';
import mon from '../assets/images/products/13.png';
import mon2 from '../assets/images/products/13.3.jpg';
import mon3 from '../assets/images/products/13.2.jpg';
import lev from '../assets/images/products/33.png';
import ameri from '../assets/images/products/37.png';
import rojo from '../assets/images/products/41.png';
import rojo2 from '../assets/images/products/41.1.png';
import redbull from '../assets/images/products/42.png';
import tommyne from '../assets/images/products/43.png';
import chicag from '../assets/images/products/100.png';

/**
 * @description Este es el estado global de la tienda
 * @instructions La forma que debe tener la información de cada producto es la siguiente:
 * {
      id: createUniqueID()01,
      name: 'Sudadera New York',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [hoddie, hoddie, nw2],
      tallas: {
        S: {
          stock: 15,
          cantidad: 1
        },
        M: {
          stock: 15,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
 */

const createUniqueID = () => Math.random().toString(36).substr(2, 9);

export const productsData = {
  currentCategory: 'all',
  cart: [],
  products: [
    {
      id: createUniqueID(),
      name: 'Hoodie Bad Bunny',
      price: 15,
      description:
        'Hoodie talla americana 98% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [bad1, bad2, bad3],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Azul y Blanco',
      price: 15,
      description:
        'Hoodie talla americana 98% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [azub1, azub2, azub3],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Balenciaga Rojo y Blanco ',
      price: 15,
      description:
        'Hoodie talla americana 98% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [balr, balr2, balr3],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Bulls 23',
      price: 15,
      description:
        'Hoodie talla americana 98% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [bull, bull2, bull3],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'Sudadera Akatsuki',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [akatsuki, akatsuki1, akatsuki2],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 1,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'Sudadera Nasa',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [nasa, nasa2, nasa3],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'Sudadera de Kakashi',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [ka1, ka2, ka3],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 1,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'HOODIE',
      description:
        'Hoodie talla americana 98% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [ama, ama2, ama3],
      price: 15,
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      price: 15,
      name: 'HOODIE AZUL',
      description:
        'Hoodie talla americana 98% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [az, az2, az3],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'HOODIE BALENCIAGA',
      description:
        'Hoodie talla americana 98% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [ba, ba2, ba3],
      price: 15,
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },

    {
      id: createUniqueID(),
      name: 'HOODIE GAP',
      description:
        'Hoodie talla americana ,98% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [gap, gap2, gap3],
      price: 15,
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'HOODIE JESUS ',
      description:
        'Hoodie talla americana ,98% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [jes, jes2, jes3],
      price: 15,
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'HOODIE MANDARINA',
      price: 15,
      description:
        'Hoodie talla americana ,98% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [mad1, mad2, mad3],
      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'HOODIE UNDER ARMOR',
      description:
        'Hoodie talla americana ,98% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [under, under2],
      price: 15,

      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'Sudadera De SNK',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad, Color Gris',
      images: [snk, snk2, snk3],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'Sudadera Monster',
      images: [mon, mon2, mon3],
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',

      tallas: {
        S: {
          stock: 2,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'Sudadera Levi a Color',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [lev, lev, lev],
      tallas: {
        S: {
          stock: 0,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'Sudadera American Eagle ',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [ameri, ameri, ameri],

      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'Sudadera The Coutere',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [rojo, rojo, rojo2],

      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'Sudadera RedBull',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [redbull, redbull, redbull],

      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },
    {
      id: createUniqueID(),
      name: 'Tommy Hilfiger Negra',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [tommyne, tommyne, tommyne],

      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 0,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'hoodies',
    },

    //pantalon//

    //camiseta//

    {
      id: createUniqueID(),
      name: 'Camiseta Chicago Bulls ',
      price: 7,
      description: 'camiseta de excelente calidad',
      images: [chicag, chicag, chicag],

      tallas: {
        S: {
          stock: 1,
          cantidad: 0,
        },
        M: {
          stock: 1,
          cantidad: 0,
        },
        L: {
          stock: 0,
          cantidad: 0,
        },
      },
      category: 'camisetas',
    },
  ],
};
