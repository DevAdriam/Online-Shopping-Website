import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isloggedin, login, userData } from "../AccMain/Accslice";
import IfLogin from "../LogIn/IfLogin";
import HavntLogin from "../LogIn/HavntLogin";

const DetermineLogin = () => {
	const isLoggedIn = useSelector(isloggedin);
	const personifo = useSelector(userData);

	return <>{isLoggedIn && personifo.password !== "" ? <IfLogin /> : <HavntLogin />}</>;
};

export default DetermineLogin;
