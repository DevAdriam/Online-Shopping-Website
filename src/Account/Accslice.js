import { createSlice } from "@reduxjs/toolkit";

const AccSlice = createSlice({
	name: "acc",
	initialState: {
		personData: JSON.parse(localStorage.getItem("personInfo")),
	},
	reducers: {
		updateAccount: (state, action) => {
			const personInfo = action.payload;
			localStorage.setItem("personInfo", JSON.stringify(personInfo));
		},
	},
});
export const userData = (state) => state.acc.personData;
export const { updateAccount } = AccSlice.actions;

export default AccSlice.reducer;
