import { Link, Outlet } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
	return (
		<div>
			<nav className=''>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/register'>Register</Link>
				<Link to='/login'>Login</Link>
			</nav>

			<Outlet />
		</div>
	);
};

export default Navbar;
