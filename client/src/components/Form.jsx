import { FormIco } from './Img';

export const FormLogin = ({ state }) => {
	const handleClose = () => {
		state(false);
	};
	return (
		<>
			<div className='modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full'>
				<div className='modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
					<div className='modal-wrapper-flex sm:flex sm:items-start'>
						<div className='modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 sm:mx-0 sm:h-10 sm:w-10'>
							<FormIco />
						</div>
						<div className='modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left'>
							<h3 className='text-lg font-medium text-gray-900'>Formulario</h3>
							<div className='modal-text mt-2'>
								<p className='text-gray-500 text-sm'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
									asperiores quam temporibus porro esse numquam accusantium
									odio. Nemo harum voluptas veniam facilis magnam a natus!
									Debitis explicabo ab eaque excepturi!
								</p>
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
					<button
						onClick={handleClose}
						className='w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-blue-500 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
					>
						Ingresar
					</button>
				</div>
			</div>
		</>
	);
};
