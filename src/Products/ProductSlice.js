import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
	name: "products",
	initialState: {
		darkMode: false,
		cartList: [],
		wishList: [],
		totalPrice: 0,
	},
	reducers: {
		changeMode: (state) => {
			state.darkMode = !state.darkMode;
		},
		addToCart: (state, action) => {
			const newItem = action.payload;
			//to check if item is already Exist
			const existingItem = state.cartList.find((item) => item.id === newItem.id);

			if (existingItem) {
				existingItem.quantity++;
				existingItem.totalprice += newItem.price;
			} else {
				state.cartList.push({
					id: newItem.id,
					totalprice: newItem.price,
					quantity: 1,
					price: newItem.price,
					name: newItem.name,
				});
			}

			console.log(state.cartList);
		},
		addToWishList: (state, action) => {
			const existingItem = state.wishList.find((item) => item.id === action.payload.id);

			if (existingItem) {
				return;
			} else {
				state.wishList = [...state.wishList, action.payload];
			}

			console.log(state.wishList);
		},
	},
});

export const selectAllProducts = (state) => state.products;
export const darkMode = (state) => state.products.darkMode;
export const wishList = (state) => state.products.wishList;
console.warn(wishList);
export const { changeMode, addToCart, addToWishList } = ProductSlice.actions;

export default ProductSlice.reducer;
