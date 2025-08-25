import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: { userData: null, status: false },
    reducers: {
        login(state, action) {
            state.status = true
            state.userData = action.payload.userData
        },
        logout: (state) => {
            state.status = false
            state.userData = null
        }
    }
})

export const {login,logout} = slice.actions

export default slice.reducer