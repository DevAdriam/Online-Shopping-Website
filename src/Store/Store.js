import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Products/ProductSlice";
import cartReducer from "../Cart/CartSLice";
const Estore = configureStore({
	reducer: {
		products: productReducer,
		carts: cartReducer,
	},
});

export default Estore;
