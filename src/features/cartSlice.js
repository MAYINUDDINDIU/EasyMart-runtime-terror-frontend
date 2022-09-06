import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get From cart
export const getFromCart = createAsyncThunk('cart/getFromCart', async () => {
    return fetch('https://limitless-everglades-36569.herokuapp.com/addtocart').then(res => res.json())
});

// // Delete cart data
export const deleteCartData = createAsyncThunk('cart/deleteCartData', async (id) => {
    return fetch(`https://limitless-everglades-36569.herokuapp.com/deleteCart/${id}`, {
        method: 'DELETE',
    }).then(res => res.json())
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isLoading: false,
        product: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(getFromCart.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getFromCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
            state.error = null;
        });
        builder.addCase(getFromCart.rejected, (state, action) => {
            action.isLoading = false;
            state.product = [];
            state.error = action.payload;
        });
    }
})

export default cartSlice.reducer;