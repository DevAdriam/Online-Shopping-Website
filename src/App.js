import React from "react";
import MainPage from "./Layout/MainPage";
import CableSystem from "./Routes/CableSystem";
import { Customhook } from "./Hooks/Customhook";
import Loading from "./Loading/Loading";
import { ReactComponent as Error } from "./404 error lost in space-pana.svg";
const App = () => {
	const { isLoading, isError } = Customhook();

	return (
		<div>
			{isError && <Error />}
			{isLoading && !isError ? <Loading /> : <CableSystem />}
		</div>
	);
};

export default App;
