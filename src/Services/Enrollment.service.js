import axios from 'axios';

const URL = 'http://localhost:8080/enrollment';

export const getEnrollments = async () => {
	const options = {
		headers: { Authorization: `${localStorage.getItem('token')}` },
	};

	try {
		const response = await axios.get(`${URL}`, options);

		return response.data.flat();
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};

export const enrollCourse = async (id) => {
	const options = {
		headers: { Authorization: `${localStorage.getItem('token')}` },
	};

	try {
		const response = await axios.get(`${URL}/${id}`, options);

		return response.data;
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};
