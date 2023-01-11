// import { useState } from 'react';
// import { FormUser } from './FormUser';
import Example from './FormUser';
import { FaUserPlus, FaUserSlash, FaUserEdit } from 'react-icons/fa';
const links = [
	{ label: 'Suscriptores', rol: 'user' },
	{ label: 'Moderadores', rol: 'moderator' },
	{ label: 'Managers', rol: 'manager' },
	{ label: 'Economistas', rol: 'economist' },
];

export const Admin = () => {
	// const [divs, setDivs] = useState({
	// 	createdUser: true,
	// });
	return (
		<div className='grid grid-cols-1 h-screen w-full'>
			<div className='bg-gray-800 flex flex-col justify-center'>
				<div className='border max-w-[1200px] w-full mt-4 mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
					<div className='text-base'>
						<button className='border-none dark:text-white border ml-3 px-3 py-2 rounded-md bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold'>
							Cerrar cuenta
						</button>
					</div>
				</div>
				<div className='border max-w-[1200px] w-full mt-4 mx-auto bg-gray-900 p-8 px-8'>
					<div className='flex text-lg dark:text-white'>
						<div className='w-1/3 px-2'>
							<ul>
								{links.map(({ label, rol }, i) => (
									<li key={i} className='hover:border rounded-md pl-2'>
										<a href='#'>{label}</a>
									</li>
								))}
							</ul>
						</div>
						<div className='w-full px-2 rounded-lg'>
							<div className='py-3 flex'>
								<FaUserPlus className='text-lg mr-2' />
								<FaUserEdit className='text-lg mr-2' />
								<FaUserSlash className='text-lg mr-2' />
							</div>
							<Example />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
