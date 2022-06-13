import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from '../features/transaction/transactionSlice'
import alertReducer from '../features/alert/alertSlice'
import loaderReducer from '../features/loader/loaderSlice'
import donateStepReducer from '../features/donateSteps/donateStepSlice'

const store = configureStore({
    reducer: {
        transaction: transactionReducer,
        alert: alertReducer,
        loader: loaderReducer,
        donateStep: donateStepReducer
    }
})

export default store