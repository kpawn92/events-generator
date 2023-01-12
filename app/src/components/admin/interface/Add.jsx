export const Add = () => {
	return (
		<form className='max-w-[600px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
			<h2 className='text-4xl dark:text-white font-bold text-center'>Add</h2>
			<div className='flex'>
				<div className='mr-4 w-full'>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='email'>Nombre(s)</label>
						<input
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='email'>Apellidos</label>
						<input
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='email'>DNI</label>
						<input
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
					</div>
				</div>
				<div className='w-full'>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='email'>Email</label>
						<input
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='password'>Contrase&ntilde;a</label>
						<input
							type='password'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='email'>Role</label>
						<input
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
							list='roles'
						/>
						<datalist id='roles'>
							<option value='moderator'></option>
							<option value='economist'></option>
						</datalist>
					</div>
				</div>
			</div>

			<button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
				Crear usuario
			</button>
		</form>
	);
};
