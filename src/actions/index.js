import { ADD_TO_CART, DELETE_ITEMS_FROM_CART } from '../types';

export const addItemToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const deleteItemsFromCart = (payload) => {
  return {
    type: DELETE_ITEMS_FROM_CART,
    payload,
  };
};
