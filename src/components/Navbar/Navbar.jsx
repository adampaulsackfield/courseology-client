import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
	return (
		<nav className=''>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
		</nav>
	);
};

export default Navbar;
