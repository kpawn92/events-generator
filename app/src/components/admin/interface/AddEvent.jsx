import { useForm } from 'react-hook-form';

const AddEvent = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async body => {
		try {
			console.log(body);
			// const newBody = { ...body, role: 'manager' };
			// const response = await addMgr(token, newBody);
			// setHttp(response.status);
			// temp();
		} catch (error) {
			console.log(error);
			// setHttp(error.response.status);
			// temp();
		}
	};
	// const date = new Date('2022-01-25 14:50:02');
	// console.log(date.getTime());
	// console.log(Date.parse('2021-11-25'));
	// const date = new Date(1637798400000);
	// console.log(date);
	// console.log(Date.now('2018/10/30'));
	return (
		<div>
			<form
				className='w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className='uppercase text-4xl dark:text-white font-bold text-center'>
					Add Evento
				</h2>
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
										pattern:
											/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
									})}
									type='text'
									placeholder='DD/MM/YYYY'
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
										pattern:
											/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
									})}
									type='text'
									placeholder='DD/MM/YYYY'
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
									pattern:
										/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
								})}
								type='text'
								placeholder='DD/MM/YYYY'
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
									pattern:
										/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/i,
								})}
								type='text'
								placeholder='DD/MM/YYYY'
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
