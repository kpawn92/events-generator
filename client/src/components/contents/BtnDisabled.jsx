const BtnDisabled = ({ children }) => {
	return (
		<button
			type='button'
			className='bg-blue-500 text-white py-2 px-3 rounded-md hover:shadow-lg opacity-50 cursor-not-allowed'
		>
			{children}
		</button>
	);
};

export default BtnDisabled;
