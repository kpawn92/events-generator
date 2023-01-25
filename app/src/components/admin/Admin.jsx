import { useState } from 'react';
import { FaUserPlus, FaUserSlash, FaUserEdit } from 'react-icons/fa';
import Table from './Table';
import { Edit } from './interface/Edit';
import { Invalid } from './interface/Invalid';
import { Add } from './interface/Add';
import { useGetTokenContext, useUserContext } from '../../context/UserProvider';

const links = [
	{ label: 'Suscriptores', rol: 'user' },
	{ label: 'Moderadores', rol: 'moderator' },
	{ label: 'Managers', rol: 'manager' },
	{ label: 'Economistas', rol: 'economist' },
];

export const Admin = () => {
	const { setData, setDataUser } = useUserContext();
	const setToken = useGetTokenContext();

	const [divs, setDivs] = useState({
		user: true,
	});
	const handleToggleDiv = e => {
		setDivs({ [e.target.id]: true });
	};
	return (
		<div className='grid grid-cols-1 h-screen w-full'>
			<div className='bg-gray-800 flex flex-col justify-center'>
				<div className='flex max-w-[1200px] w-full mt-4 mx-auto bg-gray-900 p-8 px-8 rounded-lg justify-between'>
					<div className='text-base'>
						<button
							onClick={() => {
								setToken(null);
								setData(null);
								setDataUser(null);
							}}
							className='border-none dark:text-white border ml-3 px-3 py-2 rounded-md bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold'
						>
							Cerrar cuenta
						</button>
					</div>

					<h2 className='flex text-xl dark:text-white font-bold text-center ml-2 items-center'>
						Administrator
					</h2>
				</div>
				<div className='rounded-xl max-w-[1200px] w-full mt-4 mx-auto bg-gray-900 p-8 px-8'>
					<div className='flex text-lg dark:text-white'>
						<div className='w-1/3 px-2'>
							<ul>
								{links.map(({ label, rol }, i) => (
									<li key={i} className='hover:border rounded-md pl-2'>
										<a href='#' id={rol} onClick={handleToggleDiv}>
											{label}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className='w-full px-2 rounded-lg'>
							<div className='py-3 flex'>
								<button className='flex border mr-4 px-5 py-2 rounded-md cursor-default'>
									<FaUserPlus className='text-2xl mr-2' />
									<small
										onClick={handleToggleDiv}
										id='plus'
										className='mr-2 cursor-pointer'
									>
										Add
									</small>{' '}
								</button>
								<button className='flex border mr-4 px-5 py-2 rounded-md cursor-default'>
									<FaUserEdit className='text-2xl mr-2' />
									<small
										onClick={handleToggleDiv}
										id='edit'
										className='mr-2 cursor-pointer'
									>
										Editar
									</small>{' '}
								</button>
								<button className='flex border mr-4 px-5 py-2 rounded-md cursor-default'>
									<FaUserSlash className='text-2xl mr-2' />
									<small
										onClick={handleToggleDiv}
										id='borrar'
										className='mr-2 cursor-pointer'
									>
										Invalidar
									</small>{' '}
								</button>
							</div>
							{divs.user && <Table role={'user'} />}
							{divs.moderator && <Table role={'moderator'} />}
							{divs.manager && <Table role={'manager'} />}
							{divs.economist && <Table role={'economist'} />}
							{divs.plus && <Add />}
							{divs.edit && <Edit />}
							{divs.borrar && <Invalid />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
