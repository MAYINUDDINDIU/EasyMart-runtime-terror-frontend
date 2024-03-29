import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
    return fetch('https://limitless-everglades-36569.herokuapp.com/product').then(res => res.json())
});

export const createProduct = createAsyncThunk('product/createProduct', async (posts) => {
    return fetch('https://limitless-everglades-36569.herokuapp.com/product', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(posts)
    }).then(res => res.json())
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id) => {
    return fetch(`https://limitless-everglades-36569.herokuapp.com/product/${id}`, {
        method: 'DELETE',
    }).then(res => res.json())
});


export const updateProduct = createAsyncThunk('product/updateProduct', async (data) => {
    const { id } = data;
    return fetch(`https://limitless-everglades-36569.herokuapp.com/product/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
});

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

        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            action.isLoading = true;
        });
    },
});


export default productSlice.reducer;