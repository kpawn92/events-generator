import { useState, useEffect } from 'react';
import { useGetTokenContext, useUserContext } from '../../context/UserProvider';
import Header from './layout/Header';
import ButtonClose from './interface/ButtonClose';
import Container from './interface/Container';
import { getEvents } from '../../api/event.api';
import Cards from '../content/Cards';

const links = [
	{ label: 'Editar evento', route: 'editEvent' },
	{ label: 'Eventos', route: 'events' },
];

const Economist = () => {
	const { /* token, */ dataUser, setDataUser, setData } = useUserContext();
	const setToken = useGetTokenContext();

	const [events, setEvents] = useState([]);

	const [divs, setDivs] = useState({
		events: true,
		editEvent: false,
	});

	useEffect(() => {
		try {
			async function events() {
				const response = await getEvents();
				setEvents(response.data);
			}
			events();
		} catch (e) {
			console.log(e);
		}
	}, []);

	return (
		<>
			<Header
				links={links}
				dataUser={dataUser}
				setDivs={setDivs}
				role='Economist'
			>
				<ButtonClose state={{ setToken, setData, setDataUser }} />
			</Header>

			<Container>
				{divs.events && <Cards title={'Eventos'} events={events} />}
				{divs.editEvent && <div>Editar cost</div>}
			</Container>
		</>
	);
};

export default Economist;
