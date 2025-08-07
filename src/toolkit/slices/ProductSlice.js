import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    return res.json()
})

const slice = createSlice({
    name: 'cart',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchCartItems.rejected, (state) => {
                state.isLoading = false
                state.isError = true || "something went wrong"
            })
    }
})

export default slice.reducer
