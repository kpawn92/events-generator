import { useEffect } from 'react';
import { getEvent } from '../api/event.api';
import Cards from '../components/container/Cards';
import Main from '../components/container/Main';
import Title from '../components/contents/Title';
import { useEventContext } from '../context/UserProvider';
import { type } from '../types';

const EventPage = () => {
	const { event, setEvent } = useEventContext();

	useEffect(() => {
		async function events() {
			const response = await getEvent();
			setEvent(response.data);
		}
		events();
	}, []);

	return (
		<Main>
			<h5>Listado disponible</h5>
			<Title>Eventos</Title>
			{event && <Cards items={event} type={type.event} />}
		</Main>
	);
};

export default EventPage;
