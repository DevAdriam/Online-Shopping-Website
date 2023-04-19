import React from "react";
import MainPage from "./Layout/MainPage";
import CableSystem from "./Routes/CableSystem";
import { Customhook } from "./Hooks/Customhook";
import Loading from "./Loading/Loading";

const App = () => {
	const { isLoading } = Customhook();

	return <div>{isLoading ? <Loading /> : <CableSystem />}</div>;
};

export default App;
