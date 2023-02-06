import { useState } from 'react';
import './Register.scss';

import { registerStudent } from '../../Services/Student.service';

const initialState = {
	name: '',
	email: '',
	interestedIn: '',
	password: '',
};
const Register = () => {
	const [formData, setFormData] = useState(initialState);

	const handleInputChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		const response = await registerStudent(formData);

		console.log(response);

		setFormData(initialState);
	};

	return (
		<div>
			<h1>Sign Up</h1>

			<form>
				<input
					onChange={(e) => handleInputChange(e)}
					name='name'
					type='text'
					placeholder='Name...'
					value={formData.name}
				/>
				<input
					onChange={(e) => handleInputChange(e)}
					name='email'
					type='email'
					placeholder='Email...'
					value={formData.email}
				/>
				<input
					onChange={(e) => handleInputChange(e)}
					name='interestedIn'
					type='text'
					placeholder='Interested In...'
					value={formData.interestedIn}
				/>
				<input
					onChange={(e) => handleInputChange(e)}
					name='password'
					type='password'
					placeholder='Password...'
					value={formData.password}
				/>
				<input
					name='confirmPassword'
					type='password'
					placeholder='Confirm Password...'
				/>

				<button onClick={(e) => onSubmit(e)}>Submit</button>
			</form>
		</div>
	);
};

export default Register;
