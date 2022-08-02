import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const menProduct = createAsyncThunk('product/menProduct', async () => {
    return fetch('http://localhost:5000/MenProduct').then(res => res.json())
});

export const womenProduct = createAsyncThunk('product/womenProduct', async () => {
    return fetch('http://localhost:5000/WomenProduct').then(res => res.json())
});

export const kidProduct = createAsyncThunk('product/kidProduct', async () => {
    return fetch('http://localhost:5000/kidProduct').then(res => res.json())
});

const collectionSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        product: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(menProduct.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(menProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
            state.error = null;
        });
        builder.addCase(menProduct.rejected, (state, action) => {
            action.isLoading = false;
            state.product = [];
            state.error = action.payload;
        });

        builder.addCase(womenProduct.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(womenProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
            state.error = null;
        });
        builder.addCase(womenProduct.rejected, (state, action) => {
            action.isLoading = false;
            state.product = [];
            state.error = action.payload;
        });

        builder.addCase(kidProduct.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(kidProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
            state.error = null;
        });
        builder.addCase(kidProduct.rejected, (state, action) => {
            action.isLoading = false;
            state.product = [];
            state.error = action.payload;
        });
    },
});


export default collectionSlice.reducer;