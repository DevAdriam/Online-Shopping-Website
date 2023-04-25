import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

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
		setProducts: (state, action) => {
			console.log(action.payload);
			state.productList = action.payload;
		},
	},
});

export const darkMode = (state) => state.products.darkMode;
export const allProducts = (state) => state.products.productList;

export const { changeMode, setProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
