import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    total_amount: 0,
    currency: '',
    return_url: 'localhost',
    name: ''
}

export const initiateTransaction = createAsyncThunk('transaction/initiateTransaction', (payload, thunkAPI) => {

})

const transactioncSlice = createSlice({
    name: 'transaction',
    initialState,
    extraReducers: {
        [initiateTransaction.fulfilled]: (state, { payload }) => {
            state.total_amount = payload.total_amount;
            state.currency = payload.currency;
            state.name = payload.name
        }
    }
})

export default transactioncSlice.reducer