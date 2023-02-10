import { TbInfoCircle } from 'react-icons/tb';

const Modal = ({ children }) => {
	return (
		<div className='fixed inset-0 z-50'>
			<div className='modal-flex-container flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
				<div className='modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75'></div>
				<div className='modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen'></div>
				&nbsp;
				<div className='modal-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full'>
					<div className='modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
						<div className='modal-wrapper-flex flex justify-center sm:flex sm:items-start'>
							<div className='modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10'>
								<TbInfoCircle className='text-4xl text-blue-600' />
							</div>
							<div className='modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left w-full'>
								{children}
							</div>
						</div>
					</div>
					<div className='modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
						{token ? (
							<button className='text-white font-semibold w-full mr-2 inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-blue-600 hover:bg-blue-300 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>
								Salas
							</button>
						) : (
							<BtnDisabled>Salas</BtnDisabled>
						)}
						<button
							onClick={() => setModal(false)}
							className='w-full mr-2 inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
						>
							Cerrar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
