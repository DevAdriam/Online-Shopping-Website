import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, fetchProducts } from "./ProductSlice";
import { Customhook } from "../Hooks/Customhook";

const FetchedProducts = () => {
	const { data } = Customhook();
	console.log(data);
	return data;
};

export default FetchedProducts;
