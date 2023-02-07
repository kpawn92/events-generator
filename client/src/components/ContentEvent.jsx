import { InfoIco } from './Img';
import { useUserContext } from '../context/UserProvider';

export const ContentEvent = ({ state, event }) => {
	const datetime = time => {
		const date = new Date(time * 1000);
		return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
	};

	const { token } = useUserContext();

	const date = {
		eventHomeSubs: datetime(event.date_beginning_inscription),
		eventEndSubs: datetime(event.end_date_inscription),
		eventHome: datetime(event.date_beginning),
		eventEnd: datetime(event.end_date_inscription),
	};
	const handleClose = e => {
		console.log(e.target.id);
		state(false);
	};
	const handleLiving = e => {
		console.log(e.target.id);
	};
	return (
		<>
			<div className='modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full'>
				<div className='modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
					<div className='modal-wrapper-flex sm:flex sm:items-start'>
						<div className='modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10'>
							<InfoIco />
						</div>
						<div className='modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left w-full'>
							<h3 className='text-2xl font-medium text-gray-900'>
								{event.name}
							</h3>
							<div className='modal-text px-3 py-3 rounded-xl mt-3'>
								<p className='py-1 flex justify-between text-base'>
									Inicio de inscripcion:
									<small className='text-base'>{date.eventHomeSubs}</small>
								</p>
								<p className='text-base py-1  flex justify-between'>
									Final de inscripcion:
									<small className='text-base'>{date.eventEndSubs}</small>
								</p>
								{/* 
								<p className='text-base py-1  flex justify-between'>
									Fecha inicio del evento:
									<small className='text-base'>{date.eventHome}</small>
								</p>
								<p className='text-base py-1  flex justify-between'>
									Fecha final del evento:
									<small className='text-base'>{date.eventEnd}</small>
								</p> */}
								<p className='text-base py-1'>Costo: {event.cost}</p>
								<p className='text-base py-1 '>
									Numero de tarjeta: {event.target}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
					<button
						onClick={handleClose}
						className='w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
					>
						Cerrar
					</button>
					{token ? (
						<button
							id={event.id}
							onClick={handleLiving}
							className='w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
						>
							Salas
						</button>
					) : (
						<button
							type='button'
							className='bg-blue-500 text-white py-2 px-3 rounded-md hover:shadow-lg opacity-50 cursor-not-allowed'
						>
							Salas
						</button>
					)}
				</div>
			</div>
		</>
	);
};
