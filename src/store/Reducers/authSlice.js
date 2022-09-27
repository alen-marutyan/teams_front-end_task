import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: null,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoginSuccess: (state, action) => {
            state.userInfo = action.payload;
            state.error = null;
        },
        userLoginFailure: (state, action) => {
            state.userInfo = null;
            state.error = action.payload.error;
        }
    },
})

export const { userLoginSuccess, userLoginFailure } = authSlice.actions

export default authSlice.reducer
