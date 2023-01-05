import { FaUser, FaLock } from 'react-icons/fa';
import { FormIco } from './Img';

export const FormLogin = ({ state }) => {
	const handleClose = () => {
		state(false);
	};
	return (
		<>
			{/*
			INPUT CON ICON
				<label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
				<div class="relative">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
					</div>
					<input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
				</div>
			*/}

			<div className='modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full'>
				<form>
					<div className='modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
						<div className='modal-wrapper-flex sm:flex sm:items-start'>
							<div className='modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 sm:mx-0 sm:h-10 sm:w-10'>
								<FormIco />
							</div>
							<div className='modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left'>
								<h3 className='text-lg font-medium text-gray-900'>
									Acceder al sistema
								</h3>
								<div className='content-form mt-8 w-80'>
									<div className='mb-3'>
										<label
											className='block mb-2 text-sm font-semibold text-gray-600'
											htmlFor='email'
										>
											Email
										</label>
										<div className='relative'>
											<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
												<FaUser className='fill-gray-500' />
											</div>
											<input
												type='text'
												id='email'
												name='email'
												className='shadow-sm bg-gray-50 border border-gray-200/70 text-gray-900 text-sm rounded-lg hover:bg-white focus:ring-blue-500 focus:border-blue-500 block w-full py-4 pl-10 p-2.5 focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
												placeholder='jhon@gmail.com'
											/>
										</div>
									</div>
									<div className='mb-8'>
										<label
											className='block mb-2 text-sm font-semibold text-gray-600'
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
												id='password'
												className='shadow-sm bg-gray-50 border border-gray-200/70 text-gray-900 text-sm rounded-lg hover:bg-white focus:ring-blue-500 focus:border-blue-500 block w-full py-4 pl-10 p-2.5 focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
												placeholder='********'
											/>
										</div>
									</div>
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
						<button className='w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-blue-500 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>
							Ingresar
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
