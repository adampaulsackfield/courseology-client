import { Link, Outlet } from 'react-router-dom';
import './Navbar.scss';

// Context
import { TokenContext } from '../../context/TokenContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
	const { token } = useContext(TokenContext);

	const handleLogout = () => {
		localStorage.removeItem('token');

		toast.success('Logout Successful');

		setTimeout(() => {
			window.location.reload();
		}, 3000);
	};

	return (
		<div>
			<nav className=''>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/courses'>Courses</Link>

				{token ? (
					<>
						<Link to='/profile'>Profile</Link>
						<Link to='#' onClick={handleLogout}>
							Logout
						</Link>
					</>
				) : (
					<>
						<Link to='/register'>Register</Link>
						<Link to='/login'>Login</Link>
					</>
				)}
			</nav>

			<Outlet />
		</div>
	);
};

export default Navbar;
