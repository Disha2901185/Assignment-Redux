import { createSlice } from "@reduxjs/toolkit";
import { photosApi } from "./photosApi";

export const photoSlice=createSlice({
    name:"photo",
    initialState:{
        isLoading:false,
        photos:[],
        isError:false
    },
    extraReducers: (builder) => {
        builder.addCase(photosApi.pending, (state, action) => {
         state.isLoading = true;
        })
        builder.addCase(photosApi.fulfilled, (state, action) => {
         state.isLoading = false;
         state.photos = action.payload;
        })
        builder.addCase(photosApi.rejected, (state, action) => {
         state.isError = true;
        })
       }
})