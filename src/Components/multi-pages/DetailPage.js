import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { allProducts } from "../Products/ProductSlice";

const DetailPage = () => {
	const params = useParams();
	const products = useSelector(allProducts);
	console.log(products);

	return <div>DetailPage of products {params.pId}</div>;
};

export default DetailPage;
