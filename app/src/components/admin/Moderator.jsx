import { useState, useEffect } from 'react';
import { useGetTokenContext, useUserContext } from '../../context/UserProvider';
import { getEvents } from '../../api/event.api';
import Table from './Table';
import AddEvent from './interface/AddEvent';
import Cards from '../content/Cards';
import AddMgr from './interface/AddMgr';
import AddLiving from './interface/AddLiving';
import Abstract from './interface/Abstract';
import { userByRole } from '../../api/user.api';

const links = [
	{ label: 'Crear manager', route: 'addManager' },
	{ label: 'Crear evento', route: 'addEvents' },
	{ label: 'Crear sala', route: 'addliving' },
	{ label: 'Eventos', route: 'events' },
	{ label: 'Managers', route: 'manager' },
	{ label: 'Resumenes', route: 'abstract' },
];

export const Moderator = () => {
	const { token, dataUser, setDataUser, setData } = useUserContext();
	const setToken = useGetTokenContext();

	const [events, setEvents] = useState([]);
	const [managers, setManagers] = useState([]);

	const [activeEvent, setActiveEvent] = useState(false);

	const [divs, setDivs] = useState({
		events: true,
		addEvents: false,
		manager: false,
		addManager: false,
	});

	useEffect(() => {
		try {
			console.log('render moderator');
			async function events() {
				const response = await getEvents();
				setEvents(response.data);
				const res = await userByRole(token, 'manager');
				setManagers(res.data);
			}
			events();
		} catch (e) {
			console.log(e);
		}
	}, [activeEvent]);

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
					<div className='dark:text-white'>
						<ul className='flex'>
							{links.map(({ label, route }, i) => (
								<li
									key={i}
									className='hover:border rounded-md mt-2 ml-2 mr-2 px-2'
								>
									<a href='#' id={route} onClick={handleToggleDiv}>
										{label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<h2 className='text-xl dark:text-white font-bold text-center ml-2 items-center'>
						Moderator
						<p className='text-xs font-light'>{dataUser.email}</p>
					</h2>
				</div>
				<div className='rounded-xl max-w-[1200px] w-full mt-4 mx-auto bg-gray-900 p-8 px-8'>
					<div className='flex text-lg dark:text-white'>
						<div className='flex justify-center w-full px-2 rounded-lg'>
							{divs.manager && (
								<Table role={'manager'} permission={'moderator'} />
							)}
							{divs.events && <Cards title={'Eventos'} events={events} />}
							{divs.addEvents && (
								<AddEvent active={activeEvent} setActive={setActiveEvent} />
							)}
							{divs.addliving && (
								<AddLiving events={events} managers={managers} />
							)}
							{divs.addManager && (
								<AddMgr active={activeEvent} setActive={setActiveEvent} />
							)}
							{divs.abstract && <Abstract />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
