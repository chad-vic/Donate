import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { donateFetch } from "../../axios/custom";
import { nextColorStep, nextPageStep } from "../donateSteps/donateStepSlice";
import { isLoading, isNotLoading } from "../loader/loaderSlice";

const initialState = {
    total_amount: 0,
    currency: '',
    name: '',
    return_url:''
}

export const initiateTransaction = createAsyncThunk('transaction/initiateTransaction', 
 async (transactionValue, thunkAPI) => {

   thunkAPI.dispatch(isLoading())
    try {
       const {data} = await donateFetch.post('/transaction/initiate',transactionValue)

       localStorage.setItem('transaction_id',data.data.transaction_id)

       thunkAPI.dispatch(isNotLoading())
       thunkAPI.dispatch(nextPageStep())
       thunkAPI.dispatch(nextColorStep())

       return transactionValue
    } catch (error) {
        thunkAPI.dispatch(isNotLoading())
    }
})

const transactioncSlice = createSlice({
    name: 'transaction',
    initialState,
    extraReducers: {
        [initiateTransaction.pending]: (state) => {
            return state
        },
        [initiateTransaction.fulfilled]: (state, { payload }) => {
            state.total_amount = payload.total_amount;
            state.currency = payload.currency;
            state.name = payload.name;
            state.return_url = payload.return_url
        },
        [initiateTransaction.failure]: (state,) => {
            return state
        }
    }
})

export default transactioncSlice.reducer