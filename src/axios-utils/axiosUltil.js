import axios from "axios";

const client = axios.create({ baseURL: "https://fakestoreapi.com" });

export const requestData = ({ ...options }) => {
	client.defaults.headers.common.Authorization = `bear token`;

	const onSuccess = (res) => res;
	const onError = (err) => err;

	return client(options).then(onSuccess).catch(onError);
};
