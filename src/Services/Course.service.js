import axios from 'axios';

const URL = 'http://localhost:8080/course';

export const getCourses = async () => {
	try {
		const response = await axios.get(`${URL}`);

		return response.data;
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};

export const getCourseById = async (id) => {
	try {
		const response = await axios.get(`${URL}/${id}`);

		return response.data;
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};
