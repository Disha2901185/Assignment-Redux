import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import cartSliceReducer from './cartSlice'
import { photoSlice } from "./photosApiSlice";

export const store=configureStore({
    reducer:{
        cart:cartSliceReducer,
        photo:photoSlice.reducer
    },
    
})