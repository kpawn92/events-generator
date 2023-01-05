import { Link } from 'react-router-dom';
const NotFoundPage = () => {
	return (
		<section className='flex items-center h-full p-16'>
			<div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
				<div className='max-w-md text-center'>
					<h2 className='mb-8 font-extrabold text-9xl dark:text-gray-600'>
						<span className='sr-only'>Error</span>404
					</h2>
					<p className='text-2xl font-semibold md:text-3xl'>
						Lo sentimos, no pudimos encontrar esta página.
					</p>
					<p className='mt-4 mb-8 dark:text-gray-400'>
						Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra
						página de inicio.
					</p>
					<Link
						rel='noopener noreferrer'
						to='/'
						className='px-8 py-3 font-semibold rounded text-white bg-gray-400 hover:bg-black'
					>
						Back to homepage
					</Link>
				</div>
			</div>
		</section>
	);
};
export default NotFoundPage;
