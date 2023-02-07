import { useState } from 'react';
import { TbInfoCircle } from 'react-icons/tb';

const ModalBody = ({ state, livings, description }) => {
	const [salas, setSalas] = useState(false);
	const datetime = time => {
		const date = new Date(time * 1000);
		return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
	};

	const date = {
		eventHomeSubs: datetime(description.date_beginning_inscription),
		eventEndSubs: datetime(description.end_date_inscription),
		eventHome: datetime(description.date_beginning),
		eventEnd: datetime(description.end_date_inscription),
	};

	const handleClose = () => {
		state(false);
	};
	const handleOpenLiving = () => {
		setSalas(!salas);
	};

	return (
		<>
			<div className='modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full'>
				<div className='modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
					<div className='modal-wrapper-flex flex flex-col items-center'>
						<div className='modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 my-5'>
							<TbInfoCircle className='text-4xl' />
						</div>
						<div className='modal-content text-left w-full'>
							<h3 className='text-lg text-center font-semibold text-gray-900 uppercase'>
								{description.name}
							</h3>
							{!salas ? (
								<div className='modal-text bg-gray-700 px-3 py-3 rounded-xl mt-3'>
									<details className='py-1 cursor-pointer'>
										<summary>Conograma del evento</summary>
										<p className='text-sm py-1 flex justify-between'>
											Fecha inicio de inscripcion:
											<small className='text-sm'>{date.eventHomeSubs}</small>
										</p>
										<p className='text-sm py-1 border-t-2 flex justify-between'>
											Fecha final de inscripcion:
											<small className='text-sm'>{date.eventEndSubs}</small>
										</p>
										<p className='text-sm py-1 border-t-2 flex justify-between'>
											Fecha inicio del evento:
											<small className='text-sm'>{date.eventHome}</small>
										</p>
										<p className='text-sm py-1 border-t-2 flex justify-between'>
											Fecha final del evento:
											<small className='text-sm'>{date.eventEnd}</small>
										</p>
									</details>
									<p className='text-sm py-1'>Costo: {description.cost}</p>
									<p className='text-sm py-1 border-t-2'>
										Numero de tarjeta: {description.target}
									</p>
									<p className='text-sm py-1 border-t-2'>
										Estado:{' '}
										<small className='text-sm'>
											{description.status === 1 ? 'activo' : 'inactivo'}
										</small>{' '}
									</p>
								</div>
							) : (
								<div className='modal-text bg-gray-700 px-3 py-3 rounded-xl mt-3'>
									{livings.map(
										({
											id,
											name,
											description,
											name_manager: nameManager,
											lastname,
											email,
										}) => (
											<details key={id} className='cursor-pointer py-1'>
												<summary className='text-xs'>{name}</summary>
												<p className='text-xs'>
													Descripcion:{' '}
													<small className='text-xs'>{description}</small>
												</p>
												<p className='text-xs'>
													Manager:{' '}
													<small className='text-xs'>
														{nameManager} {lastname}
													</small>
												</p>
												<p className='text-xs'>
													Email: <small className='text-xs'>{email}</small>
												</p>
											</details>
										)
									)}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
					<button
						onClick={handleOpenLiving}
						className='w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-gray-700 font-medium text-gray-50 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm text-semibold'
					>
						{salas ? 'Atras' : 'Salas'}
					</button>
					<button
						onClick={handleClose}
						className='w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
					>
						Cerrar
					</button>
				</div>
			</div>
		</>
	);
};

export default ModalBody;
