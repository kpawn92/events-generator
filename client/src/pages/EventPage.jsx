import { useState, useEffect } from 'react';
import Cards from '../components/content/Cards';
import { getEvent } from '../api/event.api';

const EventPage = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		async function events() {
			const response = await getEvent();
			setEvents(response.data);
		}
		events();
	}, []);

	return (
		<>
			<Cards title='Eventos' events={events} />
		</>
	);
};

export default EventPage;
