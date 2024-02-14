import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import cartSliceReducer from './cartSlice'

export const store=configureStore({
    reducer:{
        cart:cartSliceReducer
    }
})