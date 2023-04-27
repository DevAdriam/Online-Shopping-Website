import { createSlice } from "@reduxjs/toolkit";

const AccSlice = createSlice({
	name: "acc",
	initialState: {
		personData: JSON.parse(localStorage.getItem("personInfo")),
		AccNav: "accinfo",
		isLoggedIn: false,
	},
	reducers: {
		updateAccount: (state, action) => {
			const personInfo = action.payload;
			localStorage.setItem("personInfo", JSON.stringify(personInfo));
		},
		changeNavlink: (state, action) => {
			state.AccNav = action.payload;
		},
	},
});
export const userData = (state) => state.acc.personData;
export const navAcc = (state) => state.acc.AccNav;
export const isloggedin = (state) => state.acc.isLoggedIn;
export const { updateAccount, changeNavlink } = AccSlice.actions;

export default AccSlice.reducer;
