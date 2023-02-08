const Modal = ({ children }) => {
	return (
		<>
			<div className='fixed inset-0 z-50'>
				<div className='modal-flex-container flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
					<div className='modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75'></div>
					<div className='modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen'></div>
					&nbsp;
					{children}
				</div>
			</div>
		</>
	);
};

export default Modal;
