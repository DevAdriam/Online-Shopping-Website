import { createSlice } from "@reduxjs/toolkit";

const userReviews = [
	{
		id: 0,
		name: "Kyaw Nay Soe",
		image: "https://images.unsplash.com/photo-1642060603505-e716140d45d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmlsaXBpbm8lMjBtYW58ZW58MHx8MHx8&w=1000&q=80",
		review: "This product is worth to pay , hope to get to know with this brand",
		rating: 5,
	},
	{
		id: 1,
		name: "Kris Alvarez",
		image: "https://img.freepik.com/free-photo/portrait-man-white-shirt_171337-11986.jpg",
		review: "This product is really suit with me. I recommend it",
		rating: 5,
	},
	{
		id: 2,
		name: "Mac Saint Maximum",
		image: "https://img.freepik.com/free-photo/portrait-black-man-isolated_53876-40305.jpg?w=2000",
		review: "To give honest review,the price is a bit expensive compare with product but just a bit",
		rating: 3,
	},
	{
		id: 3,
		name: "広志",
		image: "https://media.istockphoto.com/id/1411428110/photo/young-businessman-portrait.jpg?b=1&s=170667a&w=0&k=20&c=3q7TsZ3xzAX6IBIjKYSGCBYg5K9Y66GDmJdAaV4fC_4=",
		review: "製品は素晴らしいです。私はそれが好きです ",
		rating: 4,
	},
	{
		id: 4,
		name: "Ko Kyaw Gyi",
		image: "https://images.unsplash.com/photo-1609554259592-2dfe8730f798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlsaXBpbm8lMjBtYW58ZW58MHx8MHx8&w=1000&q=80",
		review: "သုံးလို့ကောင်းပါတယ်။",
		rating: 5,
	},

	{
		id: 5,
		name: "한소희",
		image: "https://netstorage-kami.akamaized.net/images/d59ebba90022b7f8.jpg",
		review: "T저에게는 정말 특별한 날입니다.",
		rating: 4,
	},
	{
		id: 6,
		name: "欣",
		image: "https://media.istockphoto.com/id/877022826/photo/portrait-of-a-happy-young-asian-business-man.jpg?s=612x612&w=0&k=20&c=5XplAzn2F_GIZBudT-eLWLvhmjddCkkCe_tdccwuINY=",
		review: "不错",
		rating: 5,
	},
	{
		id: 7,
		name: "ဝင်းနိုင်",
		image: "https://ling-app.com/wp-content/uploads/2022/07/dating-a-filipino-man-ling-app-cool-guy.jpg",
		review: "မဆိုးပါဘူး ဒါပေမယ့် ဒီဇိုင်းက premium ဖြစ်တဲ့အခါ ပိုကောင်းပါတယ်။",
		rating: 5,
	},

	{
		id: 8,
		name: "송혜교",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7B8wQOxha3WoReiwJulaOugwrXJhuCwK-A&usqp=CAU",
		review: "디자인이 마음에 들지 않지만 품질은 좋습니다.",
		rating: 4,
	},
	{
		id: 9,
		name: "Su K",
		image: "https://images.unsplash.com/photo-1617309644714-89d2ab1c9e19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhpbGlwcGluZXMlMjB3b21hbnxlbnwwfHwwfHw%3D&w=1000&q=80",
		review: "I dont know , I like it",
		rating: 5,
	},

	{
		id: 10,
		name: "ナインアウンゾー",
		image: "https://dailynorthwestern.com/wp-content/uploads/2016/04/Henry_Cao-Web.jpg",
		review: "良い製品でおすすめです。",
		rating: 5,
	},
	{
		id: 11,
		name: "Kyle",
		image: "https://media.istockphoto.com/id/1137594939/photo/close-up-view-of-attractive-man-wearing-white-t-shirt.jpg?s=612x612&w=0&k=20&c=d5okkAapzZMceIYvzTlgOnANGJKCVa0vA18aW07hFbE=",
		review: "pas mal",
		rating: 5,
	},
	{
		id: 12,
		name: "Niko",
		image: "https://www.shutterstock.com/image-photo/close-portrait-young-blonde-guy-260nw-2029518680.jpg",
		review: "sorry , the design is not my type .",
		rating: 2,
	},
	{
		id: 13,
		name: "나오미",
		image: "https://images.saymedia-content.com/.image/t_share/MTc0NDg3NjA2MDQ0NjY1MTky/top-10-most-successful-beautiful-korean-drama-actresses.jpg",
		review: "성능 대비 가격이 너무 비싸다는 게 무슨 뜻인가요?",
		rating: 5,
	},
	{
		id: 14,
		name: "신서훈",
		image: "https://media.istockphoto.com/id/591404436/photo/japanese-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=Iz0SsI6SgOl3fNlaMQyqV89ely88JN1mICjrVaDmbx0=",
		review: "친구가 이 제품을 추천한 이유를 알아요",
		rating: 4,
	},
	{
		id: 15,
		name: "やまと",
		image: "https://qph.cf2.quoracdn.net/main-qimg-0c75f21ad87d2c810262a05d81af325c-pjlq",
		review: "悪くないと思います",
		rating: 3,
	},
];

const userSLice = createSlice({
	name: "reviews",
	initialState: {
		Reviews: userReviews,
	},
	reducers: {
		addComment: (state, action) => {
			state.Reviews.unshift(action.payload);
		},
		deleteComment: (state, action) => {
			state.Reviews = state.Reviews.filter((review) => review.id !== action.payload);
		},
	},
});

export const reviews = (state) => state.review.Reviews;

export const { addComment, deleteComment } = userSLice.actions;

export default userSLice.reducer;
