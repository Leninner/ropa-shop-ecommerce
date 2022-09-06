import { ADD_TO_CART, DELETE_ITEMS_FROM_CART, AUMENTAR_CANTIDAD, AÑADIR_TALLA, GET_CATEGORY } from '../types'

export const addItemToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload
  }
}

export const deleteItemsFromCart = (payload) => {
  return {
    type: DELETE_ITEMS_FROM_CART,
    payload
  }
}

export const añadirTalla = (payload) => {
  return {
    type: AÑADIR_TALLA,
    payload
  }
}

export const getCategory = (payload) => {
  return {
    type: GET_CATEGORY,
    payload
  }
}

export const incrementQuantity = (payload) => {
  return {
    type: AUMENTAR_CANTIDAD,
    payload
  }
}
