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
import chom from '../assets/images/products/25.png';
import chom2 from '../assets/images/products/26.png';
import chom3 from '../assets/images/products/26.1.png';
import chom4 from '../assets/images/products/27.png';
import chom5 from '../assets/images/products/28.png';
import chom6 from '../assets/images/products/29.png';
import chom7 from '../assets/images/products/30.png';
import chom8 from '../assets/images/products/31.9.png';
import chom9 from '../assets/images/products/31.png';
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
      name: 'Sudadera Akatsuki',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [akatsuki, akatsuki1, akatsuki2],
      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'Sudadera Nasa',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [nasa, nasa2, nasa3],
      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'Sudadera de Kakashi',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [ka1, ka2, ka3],
      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
        },
        M: {
          stock: 15,
          cantidad: 0,
        },
        L: {
          stock: 15,
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
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      price: 15,
      name: 'HOODIE AZUL',
      description:
        'Hoodie talla americana 98% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [az, az2, az3],
      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'HOODIE BALENCIAGA',
      description:
        'Hoodie talla americana 98% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [ba, ba2, ba3],
      price: 15,
      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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

    {
      id: createUniqueID(),
      name: 'HOODIE GAP',
      description:
        'Hoodie talla americana ,98% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [gap, gap2, gap3],
      price: 15,
      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'HOODIE ',
      description:
        'Hoodie talla americana ,98% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [jes, jes2, jes3],
      price: 15,
      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'HOODIE MANDARINA',
      price: 15,
      description:
        'Hoodie talla americana ,98% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [mad1, mad2, mad3],
      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'HOODIE UNDER ARMOR',
      description:
        'Hoodie talla americana ,98% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [under, under2],
      price: 15,

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'Sudadera De SNK',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad, Color Gris',
      images: [snk, snk2, snk3],
      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'Sudadera Monster',
      images: [mon, mon2, mon3],
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'Sudadera Levi a Color',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [lev, lev, lev],
      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'Sudadera American Eagle ',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [ameri, ameri, ameri],

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'Sudadera The Coutere',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [rojo, rojo, rojo2],

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'Sudadera RedBull',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [redbull, redbull, redbull],

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
    {
      id: createUniqueID(),
      name: 'Tommy Hilfiger Negra',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [tommyne, tommyne, tommyne],

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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

    //pantalon//

    //camiseta//

    {
      id: createUniqueID(),
      name: 'Camiseta Chicago Bulls ',
      price: 7,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [chicag, chicag, chicag],

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
      category: 'camisetas',
    },

    //Chompas//

    {
      id: createUniqueID(),
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [chom, chom, chom],

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
      category: 'chompas',
    },
    {
      id: createUniqueID(),
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [chom2, chom2, chom3],

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
      category: 'chompas',
    },
    {
      id: createUniqueID(),
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [chom4, chom4, chom4],
      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
      category: 'chompas',
    },
    {
      id: createUniqueID(),
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [chom5, chom5, chom5],
      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
      category: 'chompas',
    },
    {
      id: createUniqueID(),
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [chom6, chom6, chom6],

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
      category: 'chompas',
    },
    {
      id: createUniqueID(),
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [chom7, chom7, chom7],

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
      category: 'chompas',
    },
    {
      id: createUniqueID(),
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [chom8, chom8, chom8],

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
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
      category: 'chompas',
    },
    {
      id: createUniqueID(),
      name: 'Chompa Colombiana ',
      price: 15,
      description: 'hoodies con capucha estilos únicos y de excelente calidad',
      images: [chom9, chom9, chom9],

      tallas: {
        S: {
          stock: 15,
          cantidad: 0,
        },
        M: {
          stock: 15,
          cantidad: 0,
        },
        L: {
          stock: 20,
          cantidad: 0,
        },
      },
      category: 'chompas',
    },
  ],
};
