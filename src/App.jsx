// Imports
import { Route, Routes } from 'react-router-dom';
import './App.scss';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

function App() {
	return (
		<div>
			<Routes>
				<Route element={<Navbar />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/profile' element={<Profile />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
