import { useState, useEffect } from 'react';
import { useGetTokenContext, useUserContext } from '../../context/UserProvider';
import Header from './layout/Header';
import ButtonClose from './interface/ButtonClose';
import Container from './interface/Container';
import { getEvents } from '../../api/event.api';
import Cards from '../content/Cards';
import EditCostEvent from './interface/EditCostEvent';
import Paid from './interface/Paid';
import { getPayments } from '../../api/payment.api';

const links = [
	{ label: 'Editar evento', route: 'editEvent' },
	{ label: 'Eventos', route: 'events' },
	{ label: 'Pagos de eventos', route: 'payEvents' },
];

const Economist = () => {
	const { token, dataUser, setDataUser, setData } = useUserContext();
	const setToken = useGetTokenContext();

	const [events, setEvents] = useState([]);
	const [activeEvent, setActiveEvent] = useState(false);

	const [activePay, setActivePay] = useState(false);

	const [paid, setPaid] = useState(null);

	const [divs, setDivs] = useState({
		events: true,
		editEvent: false,
		payEvents: false,
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
	}, [activeEvent]);

	useEffect(() => {
		async function payments(key) {
			const response = await getPayments(key);
			setPaid(response.data);
		}
		payments(token);
	}, [activePay]);

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
				{divs.editEvent && (
					<EditCostEvent
						events={events}
						active={activeEvent}
						setActive={setActiveEvent}
						token={token}
					/>
				)}
				{divs.payEvents && paid && (
					<Paid items={paid} active={activePay} setActive={setActivePay} />
				)}
			</Container>
		</>
	);
};

export default Economist;
