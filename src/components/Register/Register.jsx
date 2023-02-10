import { useState } from 'react';
import './Register.scss';

import { registerStudent } from '../../Services/Student.service';
import { toast } from 'react-toastify';

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

	const register = async (e) => {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			return toast.warning('Passwords do not match');
		}

		if (
			formData.name === '' ||
			formData.email === '' ||
			formData.password === ''
		) {
			return toast.warning('Please complete all required fields');
		}

		const response = await registerStudent(formData);

		if (response) {
			toast.success('Successful Sign Up. Please login');
		}

		setFormData(initialState);
	};

	return (
		<div className='wrap'>
			<h1 className='header'>Courseology</h1>

			<form action='' className='register'>
				<p className='register__header'>Register</p>
				<input
					className='register__input'
					onChange={(e) => handleInputChange(e)}
					name='name'
					value={formData.name}
					type='name'
					placeholder='Name...'
				/>

				<input
					className='register__input'
					onChange={(e) => handleInputChange(e)}
					name='email'
					value={formData.email}
					type='email'
					placeholder='Email...'
				/>

				<input
					className='register__input'
					onChange={(e) => handleInputChange(e)}
					name='interestedIn'
					value={formData.interestedIn}
					type='interestedIn'
					placeholder='Interested In...'
				/>

				<input
					className='register__input'
					onChange={(e) => handleInputChange(e)}
					name='password'
					value={formData.password}
					type='password'
					placeholder='Password...'
				/>

				<input
					className='register__input'
					onChange={(e) => handleInputChange(e)}
					name='confirmPassword'
					value={formData.confirmPassword}
					type='password'
					placeholder='Confirm Password...'
				/>

				<button className='register__button' onClick={(e) => register(e)}>
					Register
				</button>
			</form>
		</div>
	);
};

export default Register;
