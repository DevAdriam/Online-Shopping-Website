import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Products/ProductSlice";

const Estore = configureStore({
	reducer: {
		products: productReducer,
	},
});

export default Estore;
