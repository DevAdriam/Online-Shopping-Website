import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Router, Routes } from "react-router-dom";
import App from "../App";
import MainPage from "../Layout/MainPage";
import ManCollection from "../multi-pages/ManCollection";
import WomenCollection from "../multi-pages/WomenCollection";
import Electronics from "../multi-pages/Electronics";
import Jewelery from "../multi-pages/Jewelery";
import ProductList from "../Products/ProductList";
import ShoppingCart from "../Cart/ShoppingCart";
import DetailPage from "../multi-pages/DetailPage";
import Acclayout from "../Account/Acclayout";

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

				<Route path="/myaccount" element={<Acclayout />}></Route>
			</Routes>
		</>
	);
};

export default CableSystem;
