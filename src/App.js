import React from "react";
import MainPage from "./Layout/MainPage";
import CableSystem from "./Routes/CableSystem";
import { useCustomHook } from "./Hooks/useCustomHook";
import Loading from "./Loading/Loading";
import { ReactComponent as Error } from "./404 error lost in space-pana.svg";
import { allProducts } from "./Products/ProductSlice";
import { useSelector } from "react-redux";
const App = () => {
	const { isLoading } = useCustomHook();
	return <div>{isLoading ? <Loading /> : <CableSystem />}</div>;
};

export default App;
