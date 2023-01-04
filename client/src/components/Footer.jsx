export const Footer = () => {
	return (
		<footer className='mt-24'>
			<small className='font-semibold text-gray-500 text-xs'>
				©Copyrigth - {new Date().getFullYear()}
			</small>
			<p className='font-semibold text-gray-500 text-xs'>
				Universidad de Granma
			</p>
		</footer>
	);
};
