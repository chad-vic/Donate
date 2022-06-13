import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display: false,
    color: 'danger',
    message: ''
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setErrorMessage: (state, { payload }) => {
            state.display = true;
            state.message = payload
        },
        setSuccessMessage: (state, { payload }) => {
            state.display = true;
            state.message = payload;
            state.color = 'success'
        }
    }
})

export const { setErrorMessage, setSuccessMessage } = alertSlice.actions
export default alertSlice.reducer