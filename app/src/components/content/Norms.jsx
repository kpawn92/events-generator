import { TbArrowBackUp } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { rules } from '../../config/rules';

export const Norms = () => {
	const navigate = useNavigate();
	return (
		<>
			<h2 className='underline text-xl text-center text-gray-700 w-96 mx-auto leading-normal font-semibold mb-12 py-10'>
				T&eacute;rminos y condiciones de uso
			</h2>
			<button
				className='border border-t-8 rounded-full hover:shadow-sm mx-auto py-2 px-9 mb-2'
				onClick={() => navigate('/signup')}
			>
				<TbArrowBackUp />
			</button>
			{rules.map((norm, i) => (
				<ul key={i} className='italic list-disc'>
					<li>{norm.rule}</li>
				</ul>
			))}
		</>
	);
};
