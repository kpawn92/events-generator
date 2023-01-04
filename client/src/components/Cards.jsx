import { useState } from 'react';
import { Modal } from './Modal';

export const Cards = ({ title }) => {
	const [modal, setModal] = useState(false);
	const handleOpen = () => {
		setModal(true);
	};
	return (
		<div>
			{modal === true && <Modal state={setModal} />}
			<div className='text-center py-10'>
				<h5>Listado disponible</h5>
				<h1 className='text-4xl w-96 mx-auto leading-normal font-bold mb-12'>
					{title}
				</h1>
				{/* Body cards */}
				<div className='grid grid-cols-3 max-w-5xl mx-auto gap-8 group'>
					<div className='bg-green-400/10 duration-500  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  cursor-pointer p-8 rounded-xl mix-blend-luminosity'>
						<h4 className='uppercase text-xl font-bold'>Ciencias y tecnica</h4>
						<p className='text-sm leading-7 my-3 font-light opacity-50'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
							itaque officiis rem qui eaque pariatur modi adipisci aliquid cum
							facilis accusamus, quis asperiores veniam aut assumenda soluta,
							libero in necessitatibus?
						</p>
						<button
							onClick={handleOpen}
							className='bg-blue-500 text-white duration-300 py-2.5 px-8 font-bold rounded-full'
						>
							Saber m&aacute;s
						</button>
					</div>
					<div className='bg-green-400/10 duration-500  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  cursor-pointer p-8 rounded-xl mix-blend-luminosity'>
						<h4 className='uppercase text-xl font-bold'>Ciencias y tecnica</h4>
						<p className='text-sm leading-7 my-3 font-light opacity-50'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
							itaque officiis rem qui eaque pariatur modi adipisci aliquid cum
							facilis accusamus, quis asperiores veniam aut assumenda soluta,
							libero in necessitatibus?
						</p>
						<button
							onClick={handleOpen}
							className='bg-blue-500 text-white duration-300 py-2.5 px-8 font-bold rounded-full'
						>
							Saber m&aacute;s
						</button>
					</div>
					<div className='bg-green-400/10 duration-500  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  cursor-pointer p-8 rounded-xl mix-blend-luminosity'>
						<h4 className='uppercase text-xl font-bold'>Ciencias y tecnica</h4>
						<p className='text-sm leading-7 my-3 font-light opacity-50'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
							itaque officiis rem qui eaque pariatur modi adipisci aliquid cum
							facilis accusamus, quis asperiores veniam aut assumenda soluta,
							libero in necessitatibus?
						</p>
						<button
							onClick={handleOpen}
							className='bg-blue-500 text-white duration-300 py-2.5 px-8 font-bold rounded-full'
						>
							Saber m&aacute;s
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
