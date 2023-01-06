import { FaUser, FaLock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

export const FormLogin = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = data => {
		console.log(data);
	};
	return (
		<div className='lg:hidden md:hidden'>
			<div className='modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
						<div className='modal-wrapper-flex sm:flex sm:items-start'>
							<div className='modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left'>
								<div className='content-form mt-8'>
									<div className='mb-3'>
										<label className='block mb-2 text-gray-600' htmlFor='email'>
											Email
										</label>
										<div className='relative'>
											<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
												<FaUser className='fill-gray-500' />
											</div>
											<input
												type='text'
												{...register('email', {
													required: true,
													pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
												})}
												className='shadow-sm bg-gray-50 border border-gray-200/70 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4 pl-10 p-2.5 focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
												placeholder='jhon@gmail.com'
											/>
											{errors.email?.type === 'required' && (
												<span className='text-orange-400 font-extralight'>
													El campo email es requerido
												</span>
											)}
											{errors.email?.type === 'pattern' && (
												<p className='text-red-500 font-extralight'>
													El email es incorrecto
												</p>
											)}
										</div>
									</div>
									<div className='mb-8'>
										<label
											className='block mb-2 text-sm text-gray-600'
											htmlFor='password'
										>
											Password
										</label>
										<div className='relative'>
											<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
												<FaLock className='fill-gray-500' />
											</div>
											<input
												type='password'
												{...register('password', {
													required: true,
												})}
												className='shadow-sm bg-gray-50 border border-gray-200/70 text-gray-900 text-sm rounded-lg hover:bg-white focus:ring-blue-500 focus:border-blue-500 block w-full py-4 pl-10 p-2.5 focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
												placeholder='********'
											/>
											{errors.password?.type === 'required' && (
												<span className='text-orange-400 font-extralight'>
													El campo password es requerido
												</span>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
						<button
							type='submit'
							className='w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-blue-500 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
						>
							Ingresar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
