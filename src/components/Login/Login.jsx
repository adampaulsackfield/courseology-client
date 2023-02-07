import { useState } from 'react';
import './Login.scss';

import { loginStudent } from '../../Services/Student.service';

const initialState = {
	email: '',
	password: '',
};

const Login = () => {
	const [formData, setFormData] = useState(initialState);

	const handleInputChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const login = async (e) => {
		e.preventDefault();

		const response = await loginStudent(formData);

		console.log(response);

		localStorage.setItem('token', response);

		setFormData(initialState);
	};

	return (
		<div>
			<h1>Login</h1>

			<form action=''>
				<input
					onChange={(e) => handleInputChange(e)}
					name='email'
					value={formData.email}
					type='email'
					placeholder='Email...'
				/>
				<input
					onChange={(e) => handleInputChange(e)}
					name='password'
					value={formData.password}
					type='password'
					placeholder='Password...'
				/>

				<button onClick={(e) => login(e)}>Login</button>
			</form>
		</div>
	);
};

export default Login;
