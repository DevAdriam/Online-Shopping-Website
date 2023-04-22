import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, fetchProducts } from "./ProductSlice";

const FetchedProducts = () => {
	const dispatch = useDispatch();

	const products = useSelector(allProducts);

	console.log("products:", products);

	return <div>FetchedProducts</div>;
};

export default FetchedProducts;
