const AddEvent = () => {
	const date = new Date('2022-01-25 14:50:02');
	console.log(date.getTime());
	// console.log(Date.parse('2021-11-25'));
	// const date = new Date(1637798400000);
	// console.log(date);
	// console.log(Date.now('2018/10/30'));
	return (
		<div>
			<form className='w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
				<h2 className='uppercase text-4xl dark:text-white font-bold text-center'>
					Add Evento
				</h2>
				<div className='mx-2'>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='name'>Nombre</label>
						<input
							type='text'
							name='name'
							id='name'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='description'>Descripcion</label>
						<input
							type='text'
							name='description'
							id='description'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
					</div>
				</div>
				<div className='flex'>
					<div className='mx-2'>
						<div className='flex flex-col text-gray-400 py-2'>
							<label htmlFor='date_beginning_inscription'>
								Fecha inicio de inscripci&oacute;n
							</label>
							<div className='flex'>
								<input
									type='text'
									placeholder='DD/MM/YYYY'
									name='end_date_inscription'
									id='end_date_inscription'
									className='mx-1 w-2/3 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
								/>
								<input
									type='text'
									placeholder='HH:MM'
									name='end_date_inscription'
									id='end_date_inscription'
									className='mx-1 w-1/3 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
								/>
							</div>
						</div>
						<div className='flex flex-col text-gray-400 py-2'>
							<label htmlFor='end_date_inscription'>
								Fecha fin de inscripci&oacute;n
							</label>
							<div className='flex'>
								<input
									type='text'
									placeholder='DD/MM/YYYY'
									name='end_date_inscription'
									id='end_date_inscription'
									className='mx-1 w-2/3 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
								/>
								<input
									type='text'
									placeholder='HH:MM'
									name='end_date_inscription'
									id='end_date_inscription'
									className='mx-1 w-1/3 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
								/>
							</div>
						</div>
					</div>
					<div className='mx-2'>
						<div className='flex flex-col text-gray-400 py-2'>
							<label htmlFor='date_beginning'>Fecha inicio del evento</label>
							<input
								type='text'
								placeholder='DD/MM/YYYY'
								name='date_beginning'
								id='date_beginning'
								className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
							/>
						</div>
						<div className='flex flex-col text-gray-400 py-2'>
							<label htmlFor='end_date'>Fecha fin del evento</label>
							<input
								type='text'
								placeholder='DD/MM/YYYY'
								name='end_date'
								id='end_date'
								className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
							/>
						</div>
					</div>
				</div>
				<button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
					Crear
				</button>
			</form>
		</div>
	);
};

export default AddEvent;
