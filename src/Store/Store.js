import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Components/Products/ProductSlice";
import cartReducer from "../Components/Cart/CartSLice";
import accReducer from "../Components/Account/AccMain/Accslice";
import reviewReducer from "../Components/Reviews/userReviewSlice";
const Estore = configureStore({
	reducer: {
		products: productReducer,
		carts: cartReducer,
		acc: accReducer,
		review: reviewReducer,
	},
});

export default Estore;
