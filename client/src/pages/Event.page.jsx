import { useEffect, useState } from 'react';
import { getEvent } from '../api/event.api';
import Cards from '../components/container/Cards';
import Main from '../components/container/Main';
import Title from '../components/contents/Title';
import { type } from '../types';

const EventPage = () => {
	const [events, setEvents] = useState(null);
	useEffect(() => {
		async function eventos() {
			const response = await getEvent();
			setEvents(response.data);
		}
		eventos();
	}, []);

	return (
		<Main>
			<h5>Listado disponible</h5>
			<Title>Eventos</Title>
			{events && <Cards items={events} type={type.event} />}
		</Main>
	);
};

export default EventPage;
