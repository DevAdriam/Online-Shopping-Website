import { createSlice } from "@reduxjs/toolkit";

const AccSlice = createSlice({
	name: "acc",
	initialState: {
		personData: JSON.parse(localStorage.getItem("person")) || {},
		AccNav: "accinfo",
		isLoggedIn: false,
		reEnterpw: true,
		LoggingIn: null,
	},
	reducers: {
		updateAccount: (state, action) => {
			const personInfo = action.payload;
			state.personData = personInfo;
			localStorage.setItem("person", JSON.stringify(personInfo));
		},
		login: (state, action) => {
			state.isLoggedIn = !state.isLoggedIn;
		},
		password: (state, action) => {
			state.reEnterpw = action.payload;
		},
		changeNavlink: (state, action) => {
			state.AccNav = action.payload;
		},
		accDoesntExist: (state, action) => {
			state.LoggingIn = action.payload;
		},
	},
});
export const userData = (state) => state.acc.personData;
export const navAcc = (state) => state.acc.AccNav;
export const isloggedin = (state) => state.acc.isLoggedIn;
export const loggIn = (state) => state.acc.LoggingIn;
export const pwCondition = (state) => state.acc.reEnterpw;
export const { updateAccount, changeNavlink, login, password, accDoesntExist } = AccSlice.actions;

export default AccSlice.reducer;
