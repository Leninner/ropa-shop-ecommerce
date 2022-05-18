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
import cal from '../assets/images/products/cal.jpeg';
import cal2 from '../assets/images/products/cal2.jpeg';
import cal3 from '../assets/images/products/cal3.jpeg';
import nik from '../assets/images/products/nik.jpeg';
import nik2 from '../assets/images/products/nik2.jpeg';
import nik3 from '../assets/images/products/nik3.jpeg';
import pullb from '../assets/images/products/pull.jpeg';
import pullb2 from '../assets/images/products/pull2.jpeg';
import pullb3 from '../assets/images/products/pull3.jpeg';

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
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
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
      name: 'Hoodie Azul y Blanco',
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [azub1, azub2, azub3],
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
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Balenciaga Rojo y Blanco ',
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [balr, balr2, balr3],
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
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Bulls 23',
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [bull, bull2, bull3],
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
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Calvin Klein',
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [cal, cal2, cal3],
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
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Nike',
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [nik, nik2, nik3],
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
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'Hoodie Pull and Bear',
      price: 20,
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [pullb, pullb2, pullb3],
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
          stock: 1,
          cantidad: 0,
        },
      },
      category: 'sudaderas',
    },
    {
      id: createUniqueID(),
      name: 'HOODIE',
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [ama, ama2, ama3],
      price: 20,
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
      price: 20,
      name: 'HOODIE AZUL',
      description:
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
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
        'Hoodie talla americana 92% poliéster y 8% algodón 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [ba, ba2, ba3],
      price: 20,
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
        'Hoodie talla americana ,92% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [gap, gap2, gap3],
      price: 20,
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
        'Hoodie talla americana ,92% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [jes, jes2, jes3],
      price: 20,
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
      price: 20,
      description:
        'Hoodie talla americana ,92% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
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
        'Hoodie talla americana ,92% poliéster y 8% algodón, 📦Entregas 100% seguras 🚚Envió gratis a nivel nacional (Servientrega)',
      images: [under, under2],
      price: 20,

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
  ],
};
