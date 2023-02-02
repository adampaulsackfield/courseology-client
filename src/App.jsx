// Imports
import { Route, Routes } from 'react-router-dom';
import './App.scss';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
	return (
		<div>
			<Routes>
				<Route element={<Navbar />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
