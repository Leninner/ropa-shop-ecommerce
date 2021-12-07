import { ADD_TO_CART, DELETE_ITEMS_FROM_CART, AUMENTAR_CANTIDAD, AÑADIR_TALLA } from '../types';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case DELETE_ITEMS_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              talla: 'S',
            };
          }
          return product;
        }),
        bestSellers: state.bestSellers.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              talla: 'S',
            };
          }
          return product;
        }),
      };

    case AUMENTAR_CANTIDAD:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              cantidad: action.payload.cantidad,
            };
          }

          return item;
        }),
        bestSellers: state.bestSellers.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              cantidad: action.payload.cantidad,
            };
          }

          return item;
        }),
      };

    case AÑADIR_TALLA:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              talla: action.payload.talla,
            };
          }

          return item;
        }),
        bestSellers: state.bestSellers.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              talla: action.payload.talla,
            };
          }

          return item;
        }),
      };

    default:
      return state;
  }
};
