
export const getDataFromLocalStorage = () => {
  const serializedCart = localStorage.getItem('cartItem');
  return serializedCart ? JSON.parse(serializedCart) : []
}

export const saveDataFromLocalStorage = (cart) => {
  const serializedCart = JSON.stringify(cart)
  return serializedCart ? localStorage.setItem('cartItem', serializedCart) : []
}
