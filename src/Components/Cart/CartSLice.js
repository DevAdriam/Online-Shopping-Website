import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
	name: "products",
	initialState: {
		cartList: JSON.parse(localStorage.getItem("cartlist")) || [],
		orderList: JSON.parse(localStorage.getItem("orderlist")) || [],
		wishList: JSON.parse(localStorage.getItem("wishlist")) || [],
		completeOrder: false,
		allSuccess: false,
		orderDate: localStorage.getItem("orderDate") || null,
		completeModalBox: false,
		cancelModalBox: false,

		contactValid: false,
		shippingValid: false,
		paymentValid: false,

		orderValid: false,
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

		completeOrder: (state, action) => {
			state.completeOrder = action.payload;
		},
		allSuccessOrder: (state, action) => {
			const allmonths = ["Jan", "Feb", "March", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
			state.orderList = state.cartList;
			state.cartList = [];
			state.contactValid = false;
			state.shippingValid = false;
			state.paymentValid = false;
			state.orderValid = false;
			state.orderDate = `${allmonths[Number(new Date().getMonth())]}, ${new Date().getDate()}`;
			localStorage.setItem("orderDate", state.orderDate);
			localStorage.setItem("orderlist", JSON.stringify(state.orderList));
			localStorage.setItem("cartlist", JSON.stringify(state.cartList));
		},

		showModalBox: (state, action) => {
			state.completeModalBox = action.payload;
		},
		showCancelOrderMb: (state, action) => {
			state.cancelModalBox = action.payload;
		},
		deleteOrder: (state) => {
			state.orderList = [];
			localStorage.setItem("orderlist", JSON.stringify(state.orderList));
		},
		validation: (state, action) => {
			let condition = action.payload;

			if (condition === "contactValid") {
				state.contactValid = true;
			} else if (condition === "shippingValid") {
				state.shippingValid = true;
			} else if (condition === "paymentValid") {
				state.paymentValid = true;
			}

			if (state.contactValid && state.paymentValid && state.shippingValid) {
				state.orderValid = true;
			}
		},
	},
});

export const wishList = (state) => state.carts.wishList;

export const cartCount = (state) => state.carts.cartList.length;
export const cartList = (state) => state.carts.cartList;
export const goToCompleteOrder = (state) => state.carts.completeOrder;
export const allTasksFinished = (state) => state.carts.completeModalBox;
export const orderdate = (state) => state.carts.orderDate;
export const order_list = (state) => state.carts.orderList;
export const cancel_ModalBox = (state) => state.carts.cancelModalBox;
export const order_valid = (state) => state.carts.orderValid;
export const {
	addToCart,
	addToWishList,
	addItem,
	removeItem,
	deleteItem,
	deleteFromWishList,
	completeOrder,
	allSuccessOrder,
	showModalBox,
	showCancelOrderMb,
	deleteOrder,
	validation,
} = CartSlice.actions;

export default CartSlice.reducer;
