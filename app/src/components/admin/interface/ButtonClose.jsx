const ButtonClose = ({ state }) => {
	return (
		<div className='text-base'>
			<button
				onClick={() => {
					state.setToken(null);
					state.setData(null);
					state.setDataUser(null);
				}}
				className='border-none dark:text-white border ml-3 px-3 py-2 rounded-md bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold'
			>
				Cerrar cuenta
			</button>
		</div>
	);
};

export default ButtonClose;
