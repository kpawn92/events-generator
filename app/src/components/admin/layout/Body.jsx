const Body = ({ children }) => {
	return (
		<div className='grid grid-cols-1 h-screen w-full'>
			<div className='bg-gray-800 flex flex-col justify-center'>{children}</div>
		</div>
	);
};

export default Body;
