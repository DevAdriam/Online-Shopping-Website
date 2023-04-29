import React from "react";
import CableSystem from "./Routes/CableSystem";
import { useCustomHook } from "./Hooks/useCustomHook";
import Loading from "./Components/Loading/Loading";

const App = () => {
	const { isLoading } = useCustomHook();
	return <div>{isLoading ? <Loading /> : <CableSystem />}</div>;
};

export default App;
