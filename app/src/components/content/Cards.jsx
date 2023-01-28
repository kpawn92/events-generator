import { useState } from 'react';
import { getLivings } from '../../api/livingRoom.api';
import Modal from '../Modal';
import ModalBody from '../content/ModalBody';

const Cards = ({ title, events }) => {
	const [livings, setLivings] = useState([]);
	const [eventSelected, setEventSelected] = useState({});

	const [modal, setModal] = useState(false);
	const handleOpen = async e => {
		setEventSelected(events.find(event => event.id === e.target.id));
		async function livings(eventId) {
			return await getLivings(eventId);
		}

		const res = await livings(e.target.id);

		setLivings(res.data);
		setModal(true);
	};

	return (
		<div>
			{modal && (
				<Modal>
					<ModalBody
						state={setModal}
						livings={livings}
						description={eventSelected}
					/>
				</Modal>
			)}
			<div className='text-center py-10'>
				<h5>Listado disponible</h5>
				<h1 className='text-4xl w-96 mx-auto leading-normal font-bold mb-12'>
					{title}
				</h1>
				{/* Body cards */}
				<div className='grid grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto gap-8 group'>
					{events.map(({ id, name, description }) => (
						<div
							key={id}
							className='bg-emerald-400/10 duration-500  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  cursor-pointer p-8 rounded-xl mix-blend-luminosity'
						>
							<h4 className='uppercase text-xl font-bold'>{name}</h4>
							<p className='text-sm leading-7 my-3 font-light opacity-50'>
								{description}
							</p>
							<button
								id={id}
								className='bg-black text-white duration-300 hover:bg-blue-400 py-2.5 px-8 font-bold rounded-full'
								onClick={handleOpen}
							>
								Saber m&aacute;s
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Cards;
