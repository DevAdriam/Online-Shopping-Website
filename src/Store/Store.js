import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Products/ProductSlice";
import cartReducer from "../Cart/CartSLice";
import accReducer from "../Account/Accslice";
const Estore = configureStore({
	reducer: {
		products: productReducer,
		carts: cartReducer,
		acc: accReducer,
	},
});

export default Estore;
