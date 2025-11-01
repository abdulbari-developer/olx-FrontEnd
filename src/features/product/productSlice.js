import { addProduct, getProduct, getMyProduct, updateProduct, deleteProduct,getSelectedProduct } from "./productAction";
import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        product: [],
        loading: false,
        error: null,
        message: ''

    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false,
                    state.product = action.payload,
                    state.message = action.payload.message
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
            .addCase(getProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false,
                    state.product = action.payload
                // state.message = action.payload.message
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
            .addCase(getMyProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(getMyProduct.fulfilled, (state, action) => {
                state.loading = false,
                    state.product = action.payload
                // state.message = action.payload.message
            })
            .addCase(getMyProduct.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
            .addCase(updateProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.product.findIndex(p => p._id == action.payload._id)
                if (index !== -1) {
                    state.product[index] = action.payload.product
                }
                state.message = action.payload.message
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message
                if (action.payload.status === 1) {
                    state.product = state.product.filter(p => p._id !== action.payload._id)
                }
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
            .addCase(getSelectedProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSelectedProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload.data; // only the product array
                state.totalPages = action.payload.totalPages;
                state.currentPage = Number(action.payload.currentPage);
                state.totalProducts = action.payload.totalProduct;
            })
            .addCase(getSelectedProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})


export default productSlice.reducer