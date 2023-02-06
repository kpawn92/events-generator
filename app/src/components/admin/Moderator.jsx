import { useState, useEffect } from 'react';
import { useGetTokenContext, useUserContext } from '../../context/UserProvider';
import Header from './layout/Header';
import ButtonClose from './interface/ButtonClose';
import Container from './interface/Container';
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

	return (
		<>
			<Header
				links={links}
				dataUser={dataUser}
				setDivs={setDivs}
				role='Moderator'
			>
				<ButtonClose state={{ setToken, setData, setDataUser }} />
			</Header>

			<Container>
				{divs.manager && <Table role={'manager'} permission={'moderator'} />}
				{divs.events && <Cards title={'Eventos'} events={events} />}
				{divs.addEvents && (
					<AddEvent active={activeEvent} setActive={setActiveEvent} />
				)}
				{divs.addliving && <AddLiving events={events} managers={managers} />}
				{divs.addManager && (
					<AddMgr active={activeEvent} setActive={setActiveEvent} />
				)}
				{divs.abstract && <Abstract />}
			</Container>
		</>
	);
};
