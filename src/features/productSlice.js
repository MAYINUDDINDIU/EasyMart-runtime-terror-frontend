import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
    return fetch('http://localhost:5000/product').then(res => res.json())
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        product: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
            state.error = null;
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
            action.isLoading = false;
            state.product = [];
            state.error = action.payload;
        });
    },
});


export default productSlice.reducer;