import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sigIn } from '../../api/auth.api';
import { Alert } from '../content/Alert';

// Context
import { useGetTokenContext } from '../../context/UserProvider';

export const Login = () => {
	const setToken = useGetTokenContext();
	const [http, setHttp] = useState(null);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async body => {
		try {
			const response = await sigIn(body);
			setToken(response.data.token);
			setHttp(null);
		} catch (error) {
			console.log(error);
			setHttp(error.response.status);
			setTimeout(() => {
				setHttp(null);
			}, 4000);
		}
	};

	return (
		<>
			<div className='grid grid-cols-1 h-screen w-full'>
				<div className='bg-gray-800 flex flex-col justify-center'>
					<form
						className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'
						onSubmit={handleSubmit(onSubmit)}
					>
						<h2 className='uppercase text-4xl dark:text-white font-bold text-center'>
							login
						</h2>
						{http === 401 && (
							<div className='py-1'>
								<Alert title='Alert' msg='Usuario no autorizado' />
							</div>
						)}
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
						<button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
							Sign In
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
