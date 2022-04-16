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
                stock: product.tallas[currentTalla].stock - currentCantidad,
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
                stock: product.tallas[currentTalla].stock - currentCantidad,
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

  switch (action.type) {
    case DELETE_ITEMS_FROM_CART:
      const { id, currentTalla } = payload;

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== id && item.talla !== currentTalla),
        products: state.products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              tallas: {
                ...product.tallas,
                [currentTalla]: {
                  ...product.tallas[currentTalla],
                  cantidad: 0,
                  stock: Number(product.tallas[currentTalla].stock) + Number(product.tallas[currentTalla].cantidad),
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
                [currentTalla]: {
                  ...item.tallas[currentTalla],
                  cantidad: 0,
                  stock: Number(item.tallas[currentTalla].stock) + Number(item.tallas[currentTalla].cantidad),
                },
              },
            };
          }

          return item;
        }),
      };

    case GET_CATEGORY:
      if (action.payload === 'todos') {
        return {
          ...state,
          byCategory: state.products,
        };
      }

      return {
        ...state,
        byCategory: state.products.filter((item) => item.categorie === action.payload),
      };

    default:
      return state;
  }
};
