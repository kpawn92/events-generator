const Container = ({ children }) => {
	return (
		<div className='rounded-xl max-w-[1200px] w-full mt-4 mx-auto bg-gray-900 p-8 px-8'>
			<div className='flex text-lg dark:text-white'>
				<div className='flex justify-center w-full px-2 rounded-lg'>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Container;
