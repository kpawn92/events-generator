export const Footer = () => {
	return (
		<footer className='mt-24'>
			<div className='hidden lg:block md:block'>
				<small className='font-semibold text-gray-500 text-xs'>
					©Copyrigth - {new Date().getFullYear()}
				</small>
				<p className='font-semibold text-gray-500 text-xs'>
					Universidad de Granma
				</p>
			</div>

			{/* Movile */}
			<div className='ml-4 mr-4 lg:hidden md:hidden'>
				<small className='font-semibold text-gray-500 text-xs'>
					©Copyrigth - {new Date().getFullYear()}
				</small>
				<p className='font-semibold text-gray-500 text-xs'>
					Universidad de Granma
				</p>
			</div>
		</footer>
	);
};
