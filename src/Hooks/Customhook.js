import React from "react";
import { useQuery } from "react-query";
import { requestData } from "../axios-utils/axiosUltil";
const getProducts = () => {
	return requestData({ url: "/products" });
};
export const Customhook = () => {
	return useQuery("productsList", getProducts);
};
