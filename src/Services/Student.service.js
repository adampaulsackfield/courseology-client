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
