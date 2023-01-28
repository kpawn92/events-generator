import { useForm } from 'react-hook-form';
const AddLiving = ({ events, managers }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async body => {
		try {
			const eventId = body.fk_event;
			delete body.fk_event;
			console.log(eventId, body);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form
			className='max-w-[600px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className='text-3xl dark:text-white font-bold text-center uppercase'>
				Add sala
			</h2>
			<div className='flex'>
				<div className='mr-4 w-full'>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='fk_event'>Evento</label>
						<input
							{...register('fk_event', {
								required: true,
							})}
							placeholder='Seleccione el evento'
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
							list='event'
						/>
						<datalist id='event'>
							{events.map(({ id, name }) => (
								<option key={id} value={id}>
									{name}
								</option>
							))}
						</datalist>
						{errors.fk_event?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='fk_manager'>Manager</label>
						<input
							{...register('fk_manager', {
								required: true,
							})}
							placeholder='Seleccione el manager'
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
							list='mgrs'
						/>
						<datalist id='mgrs'>
							{managers.map(({ id, name, lastname }) => (
								<option key={id} value={id}>
									{name} {lastname}
								</option>
							))}
						</datalist>
						{errors.fk_manager?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='name'>Nombre</label>
						<input
							{...register('name', {
								required: true,
								pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i,
							})}
							type='text'
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
			</div>
			<button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
				Crear sala
			</button>
		</form>
	);
};

export default AddLiving;
