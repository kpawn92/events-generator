import { useForm } from 'react-hook-form';

const AddLiving = ({ events }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async body => {
		try {
			console.log(body);
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
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
							list='events'
						/>
						<datalist id='events'></datalist>
						{errors.fk_event?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='lastname'>Apellidos</label>
						<input
							{...register('lastname', {
								required: true,
								pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i,
							})}
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
						{errors.lastname?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
						{errors.lastname?.type === 'pattern' && (
							<p className='text-red-500 font-extralight'>
								El campo es incorrecto
							</p>
						)}
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='dni'>DNI</label>
						<input
							{...register('dni', {
								required: true,
								pattern: /^[0-9]+$/i,
							})}
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
						{errors.dni?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
						{errors.dni?.type === 'pattern' && (
							<p className='text-red-500 font-extralight'>
								El campo es incorrecto
							</p>
						)}
					</div>
				</div>
				<div className='w-full'>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='email'>Email</label>
						<input
							{...register('email', {
								required: true,
								pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
							})}
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
						{errors.email?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
						{errors.email?.type === 'pattern' && (
							<p className='text-red-500 font-extralight'>
								El email es incorrecto
							</p>
						)}
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='password'>Contrase&ntilde;a</label>
						<input
							{...register('password', {
								required: true,
							})}
							type='password'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
						{errors.password?.type === 'required' && (
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
