import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorInitialStep: 1,
    pageInitialStep: 0
}

const donateStepSlice = createSlice({
    name: 'donateStep',
    initialState,
    reducers: {
        nextColorStep: (state) => {
            state.colorInitialStep += 1
        },
        nextPageStep: (state) => {
            state.pageInitialStep = state.pageInitialStep + 1
        }
    }
})

export const { nextColorStep, nextPageStep } = donateStepSlice.actions
export default donateStepSlice.reducer