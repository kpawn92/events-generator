import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { dateTime, valiDate } from '../../../api/dateTime';
import { Alert, Success } from '../../content/Alert';
import { useUserContext } from '../../../context/UserProvider';
import { insertEvent } from '../../../api/event.api';

const AddEvent = ({ active, setActive }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const { token } = useUserContext();

	const [http, setHttp] = useState(null);

	const [errorDate, setErrorDate] = useState(null);

	const [year, setYear] = useState({
		state: null,
		name: '',
	});

	const temp = () => {
		setTimeout(() => {
			setYear({
				state: null,
				name: '',
			});
			setHttp(null);
			setErrorDate(null);
		}, 4000);
	};

	const onSubmit = async body => {
		try {
			/* Validations year */
			if (valiDate(body.date_init_inscription) === -1) {
				setYear({
					state: true,
					name: 'Año de inicio de inscripcion debe ser actual',
				});
				return temp();
			}
			if (valiDate(body.date_end_inscription) === -1) {
				setYear({
					state: true,
					name: 'Año final de inscripcion debe ser actual',
				});
				return temp();
			}

			if (valiDate(body.date_init_event) === -1) {
				setYear({
					state: true,
					name: 'Año inicio del evento debe ser actual',
				});
				return temp();
			}

			if (valiDate(body.date_end_event) === -1) {
				setYear({
					state: true,
					name: 'Año final del evento debe ser actual',
				});
				return temp();
			}
			/* //...// */

			const dateBeginningInscription = dateTime(
				body.date_init_inscription,
				body.hors_min_init_inscription
			);

			const endDateInscription = dateTime(
				body.date_end_inscription,
				body.hors_min_end_inscription
			);

			const dateBeginning = dateTime(body.date_init_event);
			const endDate = dateTime(body.date_end_event);

			if (
				dateBeginning > endDate ||
				dateBeginningInscription > endDateInscription
			) {
				setErrorDate(true);
				temp();
				return;
			}

			const event = {
				name: body.name,
				description: body.description,
				date_beginning_inscription: dateBeginningInscription,
				end_date_inscription: endDateInscription,
				date_beginning: dateBeginning,
				end_date: endDate,
			};

			const response = await insertEvent(token, event);
			setHttp(response.status);
			temp();
			setActive(!active);
		} catch (error) {
			console.log(error);
			setHttp(error.response.status);
			temp();
		}
	};
	return (
		<div>
			<form
				className='w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className='uppercase text-3xl dark:text-white font-bold text-center'>
					Add Evento
				</h2>
				{year.state && <Alert title={'Alert'} msg={year.name} />}
				{http === 404 && <Alert title={'Alert'} msg={'El evento ya existe'} />}
				{errorDate && <Alert title={'Alert'} msg={'Error en las fechas'} />}
				{http === 200 && (
					<Success title={'Aceptado'} msg={'El evento ha sido creado'} />
				)}
				<div className='mx-2'>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='name'>Nombre</label>
						<input
							{...register('name', {
								required: true,
								pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i,
							})}
							type='text'
							name='name'
							id='name'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
						{errors.name?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
						{errors.name?.type === 'pattern' && (
							<p className='text-red-500 font-extralight'>
								El campo es incorrecto
							</p>
						)}
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='description'>Descripcion</label>
						<textarea
							{...register('description', {
								required: true,
							})}
							name='description'
							id='description'
							rows='4'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						></textarea>
						{errors.description?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
					</div>
				</div>
				<div className='flex'>
					<div className='mx-2'>
						<div className='flex flex-col text-gray-400 py-2'>
							<label htmlFor='date_init_inscription'>
								Fecha inicio de inscripci&oacute;n
							</label>
							<div className='flex'>
								<input
									{...register('date_init_inscription', {
										required: true,
										pattern: /^\d{4}-\d{2}-\d{2}$/i,
									})}
									type='datetime'
									placeholder='YYYY-MM-DD'
									name='date_init_inscription'
									id='date_init_inscription'
									className='mx-1 w-2/3 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
								/>
								<input
									{...register('hors_min_init_inscription', {
										required: true,
										pattern: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/i,
									})}
									type='text'
									placeholder='HH:MM'
									name='hors_min_init_inscription'
									id='hors_min_init_inscription'
									className='mx-1 w-1/3 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
								/>
								{errors.hors_min_init_inscription?.type === 'required' && (
									<div className='flex justify-center items-center'>
										<span className='text-orange-400 font-extralight text-3xl'>
											!
										</span>
									</div>
								)}
								{errors.hors_min_init_inscription?.type === 'pattern' && (
									<div className='flex justify-center items-center'>
										<span className='text-red-600 font-extralight text-3xl'>
											!
										</span>
									</div>
								)}
							</div>
							{errors.date_init_inscription?.type === 'required' && (
								<span className='text-orange-400 font-extralight'>
									El campo es requerido
								</span>
							)}
							{errors.date_init_inscription?.type === 'pattern' && (
								<p className='text-red-500 font-extralight'>
									El campo es incorrecto
								</p>
							)}
						</div>
						<div className='flex flex-col text-gray-400 py-2'>
							<label htmlFor='date_end_inscription'>
								Fecha fin de inscripci&oacute;n
							</label>
							<div className='flex'>
								<input
									{...register('date_end_inscription', {
										required: true,
										pattern: /^\d{4}-\d{2}-\d{2}$/i,
									})}
									type='text'
									placeholder='YYYY-MM-DD'
									name='date_end_inscription'
									id='date_end_inscription'
									className='mx-1 w-2/3 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
								/>
								<input
									{...register('hors_min_end_inscription', {
										required: true,
										pattern: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/i,
									})}
									type='text'
									placeholder='HH:MM'
									name='hors_min_end_inscription'
									id='hors_min_end_inscription'
									className='mx-1 w-1/3 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
								/>
								{errors.hors_min_end_inscription?.type === 'required' && (
									<div className='flex justify-center items-center'>
										<span className='text-orange-400 font-extralight text-3xl'>
											!
										</span>
									</div>
								)}
								{errors.hors_min_end_inscription?.type === 'pattern' && (
									<div className='flex justify-center items-center'>
										<span className='text-red-600 font-extralight text-3xl'>
											!
										</span>
									</div>
								)}
							</div>
							{errors.date_end_inscription?.type === 'required' && (
								<span className='text-orange-400 font-extralight'>
									El campo es requerido
								</span>
							)}
							{errors.date_end_inscription?.type === 'pattern' && (
								<p className='text-red-500 font-extralight'>
									El campo es incorrecto
								</p>
							)}
						</div>
					</div>
					<div className='mx-2'>
						<div className='flex flex-col text-gray-400 py-2'>
							<label htmlFor='date_init_event'>Fecha inicio del evento</label>
							<input
								{...register('date_init_event', {
									required: true,
									pattern: /^\d{4}-\d{2}-\d{2}$/i,
								})}
								type='text'
								placeholder='YYYY-MM-DD'
								name='date_init_event'
								id='date_init_event'
								className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
							/>
							{errors.date_init_event?.type === 'required' && (
								<span className='text-orange-400 font-extralight'>
									El campo es requerido
								</span>
							)}
							{errors.date_init_event?.type === 'pattern' && (
								<p className='text-red-500 font-extralight'>
									El campo es incorrecto
								</p>
							)}
						</div>
						<div className='flex flex-col text-gray-400 py-2'>
							<label htmlFor='date_end_event'>Fecha fin del evento</label>
							<input
								{...register('date_end_event', {
									required: true,
									pattern: /^\d{4}-\d{2}-\d{2}$/i,
								})}
								type='text'
								placeholder='YYYY-MM-DD'
								name='date_end_event'
								id='date_end_event'
								className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
							/>
							{errors.date_end_event?.type === 'required' && (
								<span className='text-orange-400 font-extralight'>
									El campo es requerido
								</span>
							)}
							{errors.date_end_event?.type === 'pattern' && (
								<p className='text-red-500 font-extralight'>
									El campo es incorrecto
								</p>
							)}
						</div>
					</div>
				</div>
				<button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
					Crear
				</button>
			</form>
		</div>
	);
};

export default AddEvent;
