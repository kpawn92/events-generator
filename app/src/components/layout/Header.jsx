import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TbMenu2 } from 'react-icons/tb';
import { LogoPage } from '../Img';
import { Modal } from '../Modal';
import { FormLogin } from '../Form';
import NavMobile from './NavMobile';
import { useUserContext } from '../../context/UserProvider';

export const Header = () => {
	const { token } = useUserContext();
	const [modal, setModal] = useState(false);
	const [ico, setIco] = useState(false);
	const handleOpen = () => {
		setModal(true);
	};
	return (
		<header>
			{modal && (
				<Modal>
					<FormLogin state={setModal} />
				</Modal>
			)}
			{/* Nabvar desktop */}
			<div className='hidden lg:block md:block'>
				<div className='flex justify-between items-center py-3'>
					<NavLink
						to='/'
						className='w-44 rounded-lg shadow-2xl hover:shadow-md duration-300 hover:cursor-pointer'
					>
						<LogoPage />
					</NavLink>
					<nav className='flex items-center gap-x-6'>
						<NavLink
							to='/event'
							className='hover:scale-110 duration-300 py-1 hover:font-semibold hover:text-gray-700'
						>
							Eventos
						</NavLink>
						<NavLink
							to='/salas'
							className='hover:scale-110 duration-300 py-1 hover:font-semibold hover:text-gray-700'
						>
							Salas
						</NavLink>
						<NavLink
							to='/trabajo'
							className='hover:scale-110 duration-300 py-1 hover:font-semibold hover:text-gray-700'
						>
							Participaci&oacute;n
						</NavLink>
						<NavLink
							to='#'
							className='hover:scale-110 duration-300 py-1 hover:font-semibold hover:text-gray-700'
						>
							Quienes somos
						</NavLink>
					</nav>
					{!token && (
						<div className='flex gap-x-2'>
							<NavLink
								onClick={handleOpen}
								to='#'
								className='border border-gray-400 focus:bg-gray-200 px-4 py-2 rounded-lg'
							>
								Acceder
							</NavLink>
							{/* Register tendra su propia pagina */}
							<NavLink
								to='/signup'
								className='px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 active:bg-black font-bold active:text-yellow-400  text-white hover:shadow-lg transition-shadow'
							>
								Registrar
							</NavLink>
						</div>
					)}
				</div>
			</div>

			{/* Navbar mobile */}
			<div className='shadow-lg w-full'>
				<div className='ml-4 mr-4 lg:hidden md:hidden'>
					<div className='flex justify-between items-center py-3'>
						<NavLink to='/' className='w-44'>
							<LogoPage />
						</NavLink>

						<nav className='flex items-center gap-x-6'>
							<div>
								<TbMenu2
									className='text-4xl'
									onClick={() => {
										setIco(true);
									}}
								/>
								{/* Generar un componente para la caja de los links */}
								{ico && <NavMobile stateIco={setIco} />}
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};
