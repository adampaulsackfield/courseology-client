// Imports
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

// Context
import { StudentContext } from './context/StudentContext';
import { TokenContext } from './context/TokenContext';
import Courses from './components/Courses/Courses';

const jwtToken = localStorage.getItem('token');

function App() {
	const [student, setStudent] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		if (jwtToken) {
			setToken(jwtToken);
		}
	}, []);
	return (
		<div>
			<TokenContext.Provider value={{ token, setToken }}>
				<StudentContext.Provider value={{ student, setStudent }}>
					<Routes>
						<Route element={<Navbar />}>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/register' element={<Register />} />
							<Route path='/login' element={<Login />} />
							<Route path='/profile' element={<Profile />} />
							<Route path='/courses' element={<Courses />} />
						</Route>
					</Routes>

					<ToastContainer
						position='top-center'
						closeOnClick
						pauseOnHover
						theme='dark'
					/>
				</StudentContext.Provider>
			</TokenContext.Provider>
		</div>
	);
}

export default App;
