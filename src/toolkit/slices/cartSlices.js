import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItems: (state, action) => {
            const existingItems = state.find((item) => item.id === action.payload.id)
            if (existingItems) {
                existingItems.quantity += action.payload.quantity
            } else {
                state.push({ ...action.payload.item, quantity: action.payload.quantity })
            }
        },
        removeItems: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        },
        increaseQuantity: (state, action) => {
            return state.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
        },
        decreaseQuantity: (state, action) => {
            return state.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item)
        },
    }

})

export const { addItems, removeItems, increaseQuantity, decreaseQuantity } = slice.actions


export default slice.reducer