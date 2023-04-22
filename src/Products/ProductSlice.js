import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
	name: "products",
	initialState: {
		darkMode: false,
		productList: [],
	},
	reducers: {
		changeMode: (state) => {
			state.darkMode = !state.darkMode;
		},
	},
});

export const darkMode = (state) => state.products.darkMode;
export const allProducts = (state) => state.products.productList;
export const { changeMode } = ProductSlice.actions;

export default ProductSlice.reducer;
