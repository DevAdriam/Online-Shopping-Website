import { useQuery } from "react-query";
import { requestData } from "../axios-utils/axiosUltil";
import { setProducts } from "../Components/Products/ProductSlice";
import { useDispatch } from "react-redux";

const getProducts = () => {
	return requestData({ url: "/products" });
};

export const useCustomHook = () => {
	const dispatch = useDispatch();
	return useQuery("productsList", getProducts, {
		onSuccess: (data) => {
			console.log(data);
			dispatch(setProducts(data));
		},
		refetchOnMount: false,
		staleTime: 86400000,
	});
};
