import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Components/Products/ProductSlice";
import cartReducer from "../Components/Cart/CartSLice";
import accReducer from "../Components/Account/Accslice";
const Estore = configureStore({
	reducer: {
		products: productReducer,
		carts: cartReducer,
		acc: accReducer,
	},
});

export default Estore;
