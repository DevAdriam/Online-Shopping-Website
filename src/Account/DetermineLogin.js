import React from "react";
import { useSelector } from "react-redux";
import { isloggedin } from "./Accslice";
import IfLogin from "./IfLogin";
import HavntLogin from "./HavntLogin";

const DetermineLogin = () => {
	const isloggedIn = useSelector(isloggedin);

	return <>{isloggedIn ? <IfLogin /> : <HavntLogin />}</>;
};

export default DetermineLogin;
