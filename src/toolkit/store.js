import { configureStore } from '@reduxjs/toolkit'
import productReducers from './slices/ProductSlice'
import cartReducers from './slices/cartSlices'
import { getDataFromLocalStorage, saveDataFromLocalStorage } from '../components/localStorageHelpers';



const preLoadedCart = getDataFromLocalStorage()
console.log('pre', preLoadedCart);


export const store = configureStore({
    reducer: {
        product: productReducers,
        cart: cartReducers
    },
    preloadedState: {
        cart: preLoadedCart
    }
})


// store.subscribe(() => {
//     const state = store.getState();
//     console.log(store.getState())
//     saveDataFromLocalStorage(state.cart);
// });

store.subscribe(() => {
    const state = store.getState()
    console.log('store', store.getState())
    saveDataFromLocalStorage(state.cart)
})
