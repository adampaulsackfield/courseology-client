import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import './Login.scss';

import { loginStudent } from '../../Services/Student.service';

// Context
import { TokenContext } from '../../context/TokenContext';

const initialState = {
	email: '',
	password: '',
};

const Login = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialState);
	const { setToken } = useContext(TokenContext);

	const handleInputChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const login = async (e) => {
		e.preventDefault();

		const response = await loginStudent(formData);

		if (response.startsWith('Bearer ')) {
			toast.success(`Login Successful`);
			localStorage.setItem('token', response);

			setToken(response);
			navigate('/');
		} else {
			toast.error(`Login Failed`);
		}

		setFormData(initialState);
	};

	return (
		<div className='wrap'>
			<h1 className='header'>Courseology</h1>

			<form action='' className='login'>
				<p className='login__header'>Login</p>
				<input
					className='login__input'
					onChange={(e) => handleInputChange(e)}
					name='email'
					value={formData.email}
					type='email'
					placeholder='Email...'
				/>
				<input
					className='login__input'
					onChange={(e) => handleInputChange(e)}
					name='password'
					value={formData.password}
					type='password'
					placeholder='Password...'
				/>

				<button className='login__button' onClick={(e) => login(e)}>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
