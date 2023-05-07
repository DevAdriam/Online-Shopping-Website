import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
	name: "products",
	initialState: {
		cartList: JSON.parse(localStorage.getItem("cartlist")) || [],
		wishList: JSON.parse(localStorage.getItem("wishlist")) || [],
	},
	reducers: {
		addToCart: (state, action) => {
			const newItem = action.payload;
			//to check if item is already Exist

			const localexistItem = state.cartList.find((item) => item.id === newItem.id);
			if (localexistItem) {
				localexistItem.quantity++;
				localexistItem.totalprice += newItem.price;
			} else {
				state.cartList.push({
					id: newItem.id,
					totalprice: newItem.price * newItem.quantity || newItem.price,
					quantity: newItem.quantity || 1,
					price: newItem.price,
					title: newItem.title,
					image: newItem.image,
					color: newItem.color || "black",
					size: newItem.size || "M",
				});
			}
			localStorage.setItem("cartlist", JSON.stringify(state.cartList));
		},

		addItem: (state, action) => {
			const item = state.cartList.find((item) => item.id === action.payload);

			if (item) {
				item.quantity++;
				item.totalprice += item.price;
			}
			console.log(item);
			localStorage.setItem("cartlist", JSON.stringify(state.cartList));
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

			localStorage.setItem("cartlist", JSON.stringify(state.cartList));
		},

		deleteItem: (state, action) => {
			state.cartList = state.cartList.filter((item) => item.id !== action.payload);
			localStorage.setItem("cartlist", JSON.stringify(state.cartList));
		},

		addToWishList: (state, action) => {
			const item = action.payload;
			state.wishList.push({
				id: item.id,
				totalprice: item.price,
				save: true,
				price: item.price,
				title: item.title,
				image: item.image,
				rating: {
					rate: item.rating.rate,
					count: item.rating.count,
				},
			});
			localStorage.setItem("wishlist", JSON.stringify(state.wishList));
		},

		deleteFromWishList: (state, action) => {
			state.wishList = state.wishList.filter((item) => item.id !== action.payload);
			localStorage.setItem("wishlist", JSON.stringify(state.wishList));
		},
	},
});

export const wishList = (state) => state.carts.wishList;

export const cartCount = (state) => state.carts.cartList.length;
export const cartList = (state) => state.carts.cartList;

export const { addToCart, addToWishList, addItem, removeItem, deleteItem, deleteFromWishList } = CartSlice.actions;

export default CartSlice.reducer;
