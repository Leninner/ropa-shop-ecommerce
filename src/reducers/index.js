import { GET_CATEGORY, AUMENTAR_CANTIDAD } from '../types'

export const reducer = (state, action) => {
  const { type, payload } = action

  if (type === AUMENTAR_CANTIDAD) {
    const { id, currentTalla, currentCantidad } = payload

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
                cantidad: Number(currentCantidad) + product.tallas[currentTalla].cantidad
              }
            }
          }
        }

        return product
      })
    }
  }

  if (type === 'DELETE_ITEMS_FROM_CART') {
    const { item, currentTalla } = payload

    return {
      ...state,
      cart: state.cart.filter(
        (itemCart) => itemCart.id !== item.id || itemCart.selectedTalla !== currentTalla
      ),
      products: state.products.map((product) => {
        if (product.id === item.id) {
          return {
            ...product,
            tallas: {
              ...product.tallas,
              [currentTalla]: {
                stock:
                  Number(product.tallas[currentTalla].stock) +
                  Number(product.tallas[currentTalla].cantidad),
                cantidad: 0
              }
            }
          }
        }

        return product
      })
    }
  }

  if (type === GET_CATEGORY) {
    const { category } = payload

    return {
      ...state,
      currentCategory: category
    }
  }

  if (type === 'TOGGLE_CART') {
    const { item: product, currentTalla, currentCantidad } = payload

    const isAlreadyInCart = state.cart.find(
      (value) => value.id === product.id && currentTalla === value.selectedTalla
    )
    const updatedCart = [...state.cart]

    const updatedProducts = [...state.products].map((value) => {
      if (value.id === product.id) {
        return {
          ...value,
          tallas: {
            ...value.tallas,
            [currentTalla]: {
              cantidad: Number(currentCantidad) + value.tallas[currentTalla].cantidad,
              stock: value.tallas[currentTalla].stock - Number(currentCantidad)
            }
          }
        }
      }

      return value
    })

    if (isAlreadyInCart) {
      const index = updatedCart.findIndex(
        (value) => value.id === product.id && value.tallas[currentTalla]
      )
      const newItem = { ...isAlreadyInCart }
      newItem.tallas[currentTalla].cantidad += Number(currentCantidad)
      newItem.tallas[currentTalla].stock -= Number(currentCantidad)
      updatedCart[index] = newItem
    } else {
      const newItem = { ...product }
      newItem.tallas = {
        ...product.tallas,
        [currentTalla]: {
          cantidad: Number(currentCantidad),
          stock: product.tallas[currentTalla].stock - Number(currentCantidad)
        }
      }
      newItem.selectedTalla = currentTalla

      updatedCart.push(newItem)
    }

    return {
      ...state,
      cart: updatedCart,
      products: updatedProducts
    }
  }

  return state
}
