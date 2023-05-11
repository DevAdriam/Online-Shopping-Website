import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "../Components/Layout/MainPage";
import ManCollection from "../Components/multi-pages/ManCollection";
import WomenCollection from "../Components/multi-pages/WomenCollection";
import Electronics from "../Components/multi-pages/Electronics";
import Jewelry from "../Components/multi-pages/Jewelery";
import ProductList from "../Components/Products/ProductList";
import ShoppingCart from "../Components/Cart/ShoppingCart";
import Acclayout from "../Components/Account/Acclayout";
import ProductDetail from "../Components/Products/ProductDetail";
import { ToastContainer } from "react-toastify";
import SearchProducts from "../Components/multi-pages/SearchProducts";
import Checkout from "../Components/CompleteOrder.js/Checkout";

const ScrollToTop = () => {
	const pathname = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};

const CableSystem = () => {
	return (
		<>
			<ScrollToTop />
			<ToastContainer
				className="toast-position"
				position="top-right"
				autoClose={500}
				hideProgressBar={true}
				newestOnTop={false}
				rtl={false}
				draggable
				theme="light"
			/>
			<Routes>
				<Route path="/" index element={<MainPage />}></Route>

				<Route path="/manCollection" element={<ManCollection />}></Route>
				<Route path="/womenCollection" element={<WomenCollection />}></Route>
				<Route path="/electronics" element={<Electronics />}></Route>
				<Route path="/Jewelry" element={<Jewelry />}></Route>

				<Route path="/allProducts" element={<ProductList />}></Route>
				<Route path="allProducts/:pId" element={<ProductDetail />}></Route>

				<Route path="/shoppingCart" element={<ShoppingCart />}></Route>
				<Route path="/checkOut" element={<Checkout />}></Route>

				<Route path="/myAccount" element={<Acclayout />}></Route>
				<Route path="/searchProducts" element={<SearchProducts />}></Route>
			</Routes>
		</>
	);
};

export default CableSystem;
