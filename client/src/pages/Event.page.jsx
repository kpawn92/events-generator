import { useEffect } from 'react';
import { getEvent } from '../api/event.api';
import Cards from '../components/container/Cards';
import Main from '../components/container/Main';
import Title from '../components/contents/Title';
import { useEventContext } from '../context/UserProvider';

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
			<Title>Eventos</Title>
			{event && <Cards items={event} />}
		</Main>
	);
};

export default EventPage;
