import axios from 'axios';

const URL = 'http://localhost:8080/student';

export const registerStudent = async (student) => {
	const options = {};

	try {
		const response = await axios.post(URL, student, options);

		return response.data;
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};

export const loginStudent = async (student) => {
	const options = {};

	try {
		const response = await axios.post(`${URL}/login`, student, options);

		return response.data;
	} catch (err) {
		return 'Failed';
	}
};

export const getProfile = async () => {
	const options = {
		headers: { Authorization: `${localStorage.getItem('token')}` },
	};

	try {
		const response = await axios.get(`${URL}/profile`, options);

		return response.data;
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};
