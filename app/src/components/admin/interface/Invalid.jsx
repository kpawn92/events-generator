export const Invalid = () => {
	return (
		<form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
			<h2 className='uppercase text-4xl dark:text-white font-bold text-center'>
				Invalid
			</h2>
			<div className='flex flex-col text-gray-400 py-2'>
				<label htmlFor='email'>Codigo</label>
				<input
					type='text'
					className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
				/>
			</div>
			<button className='w-full my-5 py-2 bg-teal-500 shadow-lg hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
				Enviar
			</button>
		</form>
	);
};
