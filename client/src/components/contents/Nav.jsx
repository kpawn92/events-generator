import { NavLink } from 'react-router-dom';

const Nav = ({ children, link }) => {
	return (
		<NavLink
			to={link}
			className='flex justify-center w-44 rounded-lg shadow-2xl hover:shadow-md duration-300 hover:cursor-pointer'
		>
			{children}
		</NavLink>
	);
};

export default Nav;
