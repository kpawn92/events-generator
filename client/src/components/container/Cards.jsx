import { useEffect, useState } from 'react';
import ModalBody from '../contents/ModalBody';
import { datetime } from '../../api/time.api';
import DateEvent from './DateEvent';

const Cards = ({ items, type }) => {
	const [modal, setModal] = useState(false);

	const [date, setDate] = useState({});

	const [itemSelect, setItemSelect] = useState([]);

	const handleOpen = e => {
		setItemSelect(items.find(item => item.id === e.target.id));
		setModal(true);
	};

	useEffect(() => {
		if (type === 0) {
			setDate({
				eventHomeSubs: datetime(itemSelect.date_beginning_inscription),
				eventEndSubs: datetime(itemSelect.end_date_inscription),
				eventHome: datetime(itemSelect.date_beginning),
				eventEnd: datetime(itemSelect.end_date_inscription),
			});
		}
	}, [itemSelect]);

	return (
		<>
			{modal && (
				<ModalBody setModal={setModal} type={type} itemSelect={itemSelect}>
					<h3 className='text-2xl font-medium text-gray-900 mt-2'>
						{itemSelect.name}
					</h3>
					{type === 0 && (
						<div className='w-full my-4'>
							<DateEvent date={date} />
							<div className='text-md'>Costo: {itemSelect.cost}</div>
							<div className='text-md'>
								Numero de cuenta: {itemSelect.target}
							</div>
						</div>
					)}
					{type === 1 && (
						<div className='w-full my-4'>
							<div className='text-md'>
								Jefe de sala: {itemSelect.name_manager} {itemSelect.lastname}
							</div>
							<div className='text-md'>
								Descripci&oacute;n: {itemSelect.description}
							</div>
							<div className='text-md'>
								Correo electr&oacute;nico: {itemSelect.email}
							</div>
						</div>
					)}
				</ModalBody>
			)}
			<div className='grid grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto gap-8 group'>
				{items.map(({ id, name, description }) => (
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
							onClick={handleOpen}
							className='bg-black text-white duration-300 hover:bg-blue-400 py-2.5 px-8 font-bold rounded-full'
						>
							Saber m&aacute;s
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default Cards;
