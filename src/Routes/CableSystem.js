import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../Components/Layout/MainPage";
import ManCollection from "../Components/multi-pages/ManCollection";
import WomenCollection from "../Components/multi-pages/WomenCollection";
import Electronics from "../Components/multi-pages/Electronics";
import Jewelery from "../Components/multi-pages/Jewelery";
import ProductList from "../Components/Products/ProductList";
import ShoppingCart from "../Components/Cart/ShoppingCart";
import DetailPage from "../Components/multi-pages/DetailPage";
import Acclayout from "../Components/Account/Acclayout";

const CableSystem = () => {
	return (
		<>
			<Routes>
				<Route path="/" index element={<MainPage />}></Route>

				<Route path="/manCollection" element={<ManCollection />}></Route>
				<Route path="/womenCollection" element={<WomenCollection />}></Route>
				<Route path="/electronics" element={<Electronics />}></Route>
				<Route path="/jewelery" element={<Jewelery />}></Route>

				<Route path="/allProducts" element={<ProductList />}></Route>
				<Route path="allProducts/:pId" element={<DetailPage />}></Route>
				<Route path="/shoppingCart" element={<ShoppingCart />}></Route>

				<Route path="/myAccount" element={<Acclayout />}></Route>
			</Routes>
		</>
	);
};

export default CableSystem;
