import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const NavbarMovile = ({ stateIco }) => {
	const handleClose = () => {
		stateIco(false);
	};
	return (
		<div className='fixed inset-0 bg-white z-10'>
			<div className='ml-4 mr-4 mt-10'>
				<AiOutlineClose className='text-4xl' onClick={handleClose} />
			</div>
			<nav className='flex flex-col ml-5 mr-4 pt-8'>
				<NavLink
					to='/'
					className='shadow-lg mb-4 px-4 py-2 rounded-lg text-2xl bg-gray-50 text-center'
					onClick={handleClose}
				>
					Home
				</NavLink>
				<NavLink
					to='/event'
					className='shadow-lg mb-4 px-4 py-2 rounded-lg text-2xl bg-gray-50 text-center'
					onClick={handleClose}
				>
					Eventos
				</NavLink>
				<NavLink
					to='/salas'
					className='shadow-lg mb-4 px-4 py-2 rounded-lg text-2xl bg-gray-50 text-center'
					onClick={handleClose}
				>
					Salas
				</NavLink>
				<NavLink
					to='/salas'
					className='shadow-lg mb-4 px-4 py-2 rounded-lg text-2xl bg-gray-50 text-center'
					onClick={handleClose}
				>
					Trabajo
				</NavLink>
				<NavLink
					to='#'
					className='border mt-10 mb-4 px-4 py-2 rounded-lg text-2xl text-center'
				>
					Acceder
				</NavLink>
				{/* Register tendra su propia pagina */}
				<NavLink
					to='#'
					className='shadow-lg mb-4 px-4 py-2 rounded-lg bg-yellow-400 text-white text-2xl text-center'
				>
					Registrar
				</NavLink>
			</nav>
		</div>
	);
};
export default NavbarMovile;
