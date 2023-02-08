import { Link } from 'react-router-dom';
import { listHome, slogan } from '../../config/home';
import BgAnimated from '../contents/BgAnimated';

const Presentation = () => {
	return (
		<>
			<BgAnimated />
			{/* Desktop */}
			<div className='hidden lg:block md:block my-20'>
				<h2 className='text-4xl lg:text-6xl font-semibold lg:font-bold  text-gray-500 tracking-tighter'>
					Inscripci&oacute;n {new Date().getFullYear()}
				</h2>
				<div className='mt-4 lg:mt-5 text-xl font-medium text-gray-500 w-full lg:w-1/2'>
					{slogan}
					<ul>
						{listHome.map((item, i) => (
							<li key={i}>- {item.text}</li>
						))}
					</ul>
				</div>
				<div className='mt-5'>
					<Link
						to={'/event'}
						className='font-semibold mt-5 px-5 py-1  bg-yellow-400 text-white rounded-3xl hover:bg-yellow-500 hover:shadow-lg transition-shadow'
					>
						Participar...
					</Link>
				</div>
			</div>
		</>
	);
};

export default Presentation;
