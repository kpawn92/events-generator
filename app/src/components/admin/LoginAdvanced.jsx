import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const Login = () => {
	// const [http, setHttp] = useState(null);
	const [rols, setRols] = useState(false);
	const permissions = ['moderator', 'admin', 'manager', 'economist'];

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async body => {
		try {
			console.log(body);
			!permissions.includes(body.role) && setRols(true);
			setTimeout(() => {
				setRols(false);
			}, 3000);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='grid grid-cols-1 h-screen w-full'>
			<div className='bg-gray-800 flex flex-col justify-center'>
				<form
					className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'
					onSubmit={handleSubmit(onSubmit)}
				>
					<h2 className='text-4xl dark:text-white font-bold text-center'>
						SIGN IN
					</h2>
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
						{errors && (
							<div>
								{errors.email?.type === 'required' && (
									<span className='text-orange-400 font-extralight'>
										El campo es requerido
									</span>
								)}
								{errors.email?.type === 'pattern' && (
									<span className='text-red-500 font-extralight'>
										El campo es incorrecto
									</span>
								)}
							</div>
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
						{errors && (
							<div>
								{errors.password?.type === 'required' && (
									<span className='text-orange-400 font-extralight'>
										El campo es requerido
									</span>
								)}
							</div>
						)}
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='role'>Role</label>
						<input
							{...register('role', {
								required: true,
							})}
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
							list='roles'
						/>
						{errors && (
							<div>
								{errors.role?.type === 'required' && (
									<span className='text-orange-400 font-extralight'>
										El campo es requerido
									</span>
								)}
							</div>
						)}
						{rols && (
							<div>
								<span className='text-orange-400 font-extralight'>
									Rol no valido
								</span>
							</div>
						)}
						<datalist id='roles'>
							<option value='admin'></option>
							<option value='moderator'></option>
							<option value='manager'></option>
							<option value='economist'></option>
						</datalist>
					</div>
					<button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
};
