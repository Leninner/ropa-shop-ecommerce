import { ADD_TO_CART, DELETE_ITEMS_FROM_CART, GET_CATEGORY, AUMENTAR_CANTIDAD } from '../types';

export const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === ADD_TO_CART) {
    const { currentTalla, itemToAdd, currentCantidad } = payload;
    const updatedCart = [...state.cart];

    const isAlreadyInCart = updatedCart.find((value) => value.id === itemToAdd.id && value.talla === currentTalla);

    if (isAlreadyInCart) {
      const index = updatedCart.findIndex((value) => value.id === itemToAdd.id && value.talla === currentTalla);
      const newItem = { ...isAlreadyInCart };
      newItem.cantidad += Number(currentCantidad);
      updatedCart[index] = newItem;
    } else {
      const newItem = { ...itemToAdd };
      newItem.cantidad = Number(currentCantidad);
      updatedCart.push(newItem);
    }

    return {
      ...state,
      cart: updatedCart,
      products: state.products.map((product) => {
        if (product.id === itemToAdd.id) {
          return {
            ...product,
            tallas: {
              ...product.tallas,
              [currentTalla]: {
                ...product.tallas[currentTalla],
                stock: product.tallas[currentTalla].stock - Number(currentCantidad),
              },
            },
          };
        }

        return product;
      }),
      bestSellers: state.bestSellers.map((product) => {
        if (product.id === itemToAdd.id) {
          return {
            ...product,
            tallas: {
              ...product.tallas,
              [currentTalla]: {
                ...product.tallas[currentTalla],
                stock: product.tallas[currentTalla].stock - Number(currentCantidad),
              },
            },
          };
        }

        return product;
      }),
    };
  }

  if (type === AUMENTAR_CANTIDAD) {
    const { id, currentTalla, currentCantidad } = payload;

    return {
      ...state,
      products: state.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            tallas: {
              ...product.tallas,
              [currentTalla]: {
                ...product.tallas[currentTalla],
                cantidad: Number(currentCantidad),
              },
            },
          };
        }

        return product;
      }),
      bestSellers: state.bestSellers.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            tallas: {
              ...product.tallas,
              [currentTalla]: {
                ...product.tallas[currentTalla],
                cantidad: Number(currentCantidad),
              },
            },
          };
        }

        return product;
      }),
    };
  }

  if (type === DELETE_ITEMS_FROM_CART) {
    const { id, talla } = payload;

    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== id || item.talla !== talla),
      products: state.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            tallas: {
              ...product.tallas,
              [talla]: {
                ...product.tallas[talla],
                cantidad: 1,
                stock: Number(product.tallas[talla].stock) + Number(product.tallas[talla].cantidad),
              },
            },
          };
        }

        return product;
      }),
      bestSellers: state.bestSellers.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            tallas: {
              ...item.tallas,
              [talla]: {
                ...item.tallas[talla],
                cantidad: 1,
                stock: Number(item.tallas[talla].stock) + Number(item.tallas[talla].cantidad),
              },
            },
          };
        }

        return item;
      }),
    };
  }

  if (type === GET_CATEGORY) {
    const { category } = payload;

    return {
      ...state,
      currentCategory: category,
    };
  }

  return state;
};
