import { createSlice } from "@reduxjs/toolkit";
import { Customhook } from "../Hooks/Customhook";
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
			state.productList = action.payload;
		},
	},
});

export const FetchData = () => {
	const { data, isLoading, error } = Customhook();

	useEffect(() => {
		if (data) {
			setProducts(data);
		}
	}, [data]);

	return { data, isLoading, error };
};
export const darkMode = (state) => state.products.darkMode;
export const allProducts = (state) => state.products.productList;

export const { changeMode, setProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
