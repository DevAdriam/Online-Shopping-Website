import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isloggedin, login, userData } from "./Accslice";
import IfLogin from "./IfLogin";
import HavntLogin from "./HavntLogin";

const DetermineLogin = () => {
	const isLoggedIn = useSelector(isloggedin);
	const personifo = useSelector(userData);

	return <>{isLoggedIn && personifo.password !== "" ? <IfLogin /> : <HavntLogin />}</>;
};

export default DetermineLogin;
