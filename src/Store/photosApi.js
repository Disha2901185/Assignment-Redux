import { createAsyncThunk } from "@reduxjs/toolkit";
export const photosApi = createAsyncThunk("fetchPhotos", async () => {
    const res = await fetch(`https://picsum.photos/v2/list`);
    return res?.json();
 });