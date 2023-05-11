import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
	name: "products",
	initialState: {
		darkMode: false,
		productList: null,
		historyArr: JSON.parse(localStorage.getItem("history")) || [],
	},
	reducers: {
		changeMode: (state) => {
			state.darkMode = !state.darkMode;
		},
		setProducts: (state, action) => {
			console.log(action.payload);
			state.productList = action.payload;
		},
		addHistory: (state, action) => {
			const existHistory = state.historyArr.find((item) => item.id === action.payload.id);

			if (existHistory) {
				return;
			} else {
				state.historyArr.unshift(action.payload);
				localStorage.setItem("history", JSON.stringify(state.historyArr));
			}
		},
		deleteSingleHistory: (state, action) => {
			console.log(action.payload);
			state.historyArr = state.historyArr.filter((item) => item.id !== action.payload);
			localStorage.setItem("history", JSON.stringify(state.historyArr));
		},
		deleteAllHistory: (state, action) => {
			state.historyArr = [];
			localStorage.setItem("history", JSON.stringify(state.historyArr));
		},
	},
});

export const darkMode = (state) => state.products.darkMode;
export const allProducts = (state) => state.products.productList;
export const history = (state) => state.products.historyArr;

export const { changeMode, setProducts, addHistory, deleteSingleHistory, deleteAllHistory } = ProductSlice.actions;

export default ProductSlice.reducer;
