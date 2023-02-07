import { Link } from 'react-router-dom';
const Presentation = () => {
	return (
		<>
			{/* Desktop */}
			<div className='hidden lg:block md:block'>
				<h2 className='text-4xl lg:text-6xl font-semibold lg:font-bold  text-gray-500 tracking-tighter'>
					Inscripci&oacute;n {new Date().getFullYear()}
				</h2>
				<p className='mt-4 lg:mt-5 text-xl font-medium text-gray-500 w-full lg:w-1/2'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
					optio saepe voluptates hic tempore lo assumenda aspernatur nostrum,
					quaerat, dignissimos ipsam dolores fugit at culpt natus. Explicabo, ea
					molestiae!
				</p>
				<div className='mt-5'>
					<Link
						to={'/event'}
						className='font-semibold mt-5 px-5 py-1  bg-yellow-400 text-white rounded-3xl hover:bg-yellow-500 hover:shadow-lg transition-shadow'
					>
						Participar...
					</Link>
				</div>
			</div>
			{/* Movile */}
			<div className='ml-4 mr-4 mt-20 lg:hidden md:hidden'>
				<h2 className='text-2xl font-semibold lg:font-bold  text-gray-500 tracking-tighter'>
					Inscripci&oacute;n {new Date().getFullYear()}
				</h2>
				<p className='mt-4 text-xl font-medium text-gray-500 w-full lg:w-1/2'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
					optio saepe voluptates hic tempore lo assumenda aspernatur nostrum,
					quaerat, dignissimos ipsam dolores fugit at culpt natus. Explicabo, ea
					molestiae!
				</p>
				<Link
					to={'/event'}
					className='font-semibold mt-5 px-5 py-1  bg-yellow-400 text-white rounded-3xl hover:bg-yellow-500 hover:shadow-lg transition-shadow'
				>
					Participa ya!
				</Link>
			</div>
		</>
	);
};

export default Presentation;
