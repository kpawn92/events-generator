import { useForm } from 'react-hook-form';
import { useUserContext } from '../../../context/UserProvider';

export const Edit = () => {
	const { token, data } = useUserContext();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async body => {
		try {
			console.log(body, token);
		} catch (error) {}
	};

	return (
		<form
			className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className='text-4xl dark:text-white font-bold text-center'>EDIT</h2>
			<div className='flex flex-col text-gray-400 py-2'>
				<label htmlFor='id'>Codigo</label>
				<input
					placeholder='Seleccione el DNI'
					{...register('id', {
						required: true,
					})}
					type='text'
					className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
					list='dni'
				/>
				<datalist id='dni'>
					{data &&
						data.map(item => (
							<option key={item.id} value={item.id}>
								{item.dni}
							</option>
						))}
				</datalist>
				{errors.id?.type === 'required' && (
					<span className='text-orange-400 font-extralight'>
						El campo es requerido
					</span>
				)}
			</div>
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
					<p className='text-red-500 font-extralight'>El email es incorrecto</p>
				)}
			</div>
			<div className='flex flex-col text-gray-400 py-2'>
				<label htmlFor='password'>Contrase&ntilde;a</label>
				<input
					type='password'
					{...register('password', {
						required: true,
					})}
					className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
				/>
				{errors.password?.type === 'required' && (
					<span className='text-orange-400 font-extralight'>
						El campo password es requerido
					</span>
				)}
			</div>
			<button className='w-full my-5 py-2 bg-teal-500 shadow-lg hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
				Actualizar
			</button>
		</form>
	);
};
