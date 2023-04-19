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
					title: newItem.title,
					image: newItem.image,
				});
			}
		},

		addItem: (state, action) => {
			const item = state.cartList.find((item) => item.id === action.payload);

			if (item) {
				item.quantity++;
				item.totalprice += item.price;
			}
			console.log(item);
		},
		removeItem: (state, action) => {
			const rmvItem = state.cartList.find((item) => item.id === action.payload);

			if (rmvItem) {
				if (rmvItem.quantity === 1) {
					state.cartList = state.cartList.filter((item) => item.id !== rmvItem.id);
				} else {
					rmvItem.quantity--;
					rmvItem.totalprice -= rmvItem.price;
				}
			}
		},

		deleteItem: (state, action) => {
			state.cartList = state.cartList.filter((item) => item.id !== action.payload);
		},
	},
});

export const selectAllProducts = (state) => state.products;
export const darkMode = (state) => state.products.darkMode;
export const wishList = (state) => state.products.wishList;

export const cartCount = (state) => state.products.cartList.length;
export const cartList = (state) => state.products.cartList;

export const { changeMode, addToCart, addToWishList, addItem, removeItem, deleteItem } = ProductSlice.actions;

export default ProductSlice.reducer;
