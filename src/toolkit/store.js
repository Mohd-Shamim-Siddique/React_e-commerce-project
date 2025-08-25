import { configureStore } from '@reduxjs/toolkit'
import productReducers from './slices/ProductSlice'
import cartReducers from './slices/cartSlices'
import userReducer from './slices/userSlice'
import { getDataFromLocalStorage, saveDataFromLocalStorage } from '../components/localStorageHelpers';



const preLoadedCart = getDataFromLocalStorage()

export const store = configureStore({
    reducer: {
        product: productReducers,
        cart: cartReducers,
        user: userReducer
    },
    preloadedState: {
        cart: preLoadedCart
    }
})

store.subscribe(() => {
    const state = store.getState()
    saveDataFromLocalStorage(state.cart)
})
