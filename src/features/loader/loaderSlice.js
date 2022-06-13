import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false
}

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        isLoading: (state) => {
            state.isLoading = true
        },
        isNotLoading: (state) => {
            state.isLoading = false
        }
    }
})

export const { isLoading, isNotLoading } = loaderSlice.actions
export default loaderSlice.reducer