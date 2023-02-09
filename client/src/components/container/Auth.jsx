import { Link } from 'react-router-dom';
const Auth = () => {
	return (
		<div className='flex gap-x-2'>
			<Link
				to={'/signin'}
				className='border border-gray-400 focus:bg-gray-200 px-4 py-2 rounded-lg'
			>
				Acceder
			</Link>
			<Link
				to={'signup'}
				className='px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 active:bg-black font-bold active:text-yellow-400 text-white hover:shadow-lg transition-shadow'
			>
				Registrar
			</Link>
		</div>
	);
};

export default Auth;
