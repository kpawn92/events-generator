import { LogoPage } from './Img';

export const Header = () => {
	return (
		<header>
			{/* Nabvar desktop */}
			<div className='hidden lg:block md:block'>
				<div className='flex justify-between items-center py-3'>
					<picture className='w-44 rounded-lg shadow-2xl hover:shadow-md duration-300 hover:cursor-pointer'>
						<LogoPage />
					</picture>
					<nav className='flex items-center gap-x-6'>
						<a
							href='#'
							className='hover:scale-110 duration-300 py-1 hover:font-semibold hover:text-gray-700'
						>
							Eventos
						</a>
						<a
							href='#'
							className='hover:scale-110 duration-300 py-1 hover:font-semibold hover:text-gray-700'
						>
							Salas
						</a>
						<a
							href='#'
							className='hover:scale-110 duration-300 py-1 hover:font-semibold hover:text-gray-700'
						>
							Trabajo
						</a>
						<a
							href='#'
							className='hover:scale-110 duration-300 py-1 hover:font-semibold hover:text-gray-700'
						>
							Quienes somos
						</a>
					</nav>
					<div className='flex gap-x-2'>
						<a
							href='#'
							className='border border-gray-400 focus:bg-gray-200 px-4 py-2 rounded-lg'
						>
							Acceder
						</a>
						<a
							href='#'
							className='px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 active:bg-black font-bold active:text-yellow-400  text-white hover:shadow-lg transition-shadow'
						>
							Registrar
						</a>
					</div>
				</div>
			</div>

			{/* Navbar mobile */}
			<div className='ml-4 mr-4 lg:hidden md:hidden'>
				<div className='flex justify-between items-center py-3'>
					<h1 className='text-2xl font-bold text-yellow-500 uppercase'>
						Forum
					</h1>
					<nav className='flex items-center gap-x-6'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								/>
							</svg>
						</div>
						<div className='relative bg-white pt-10 shadow'>
							<a href='#'>Link 1</a>
							<a href='#'>Lick 2</a>
							<a href='#'>Link 3</a>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};
