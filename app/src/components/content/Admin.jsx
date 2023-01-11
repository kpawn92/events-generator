const links = [
	{ label: 'Crear usuario' },
	{ label: 'Editar usuario' },
	{ label: 'Invalidar usuario' },
	{ label: 'listar usuario' },
];

export const Admin = () => {
	return (
		<div className='grid grid-cols-1 h-screen w-full'>
			<div className='bg-gray-800 flex flex-col justify-center'>
				<div className='border max-w-[1200px] w-full mt-4 mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
					<button className='border-none dark:text-white border ml-3 px-3 py-2 rounded-md bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold'>
						Cerrar cuenta
					</button>
				</div>
				<div className='border max-w-[1200px] w-full mt-4 mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
					<div className='flex text-lg dark:text-white'>
						<div className='w-1/3 px-2'>
							<ul>
								{links.map(({ label }, i) => (
									<li key={i} className='hover:border rounded-md pl-2'>
										<a href='#'>{label}</a>
									</li>
								))}
							</ul>
						</div>
						<div className='border w-full px-2 rounded-lg'>Content</div>
					</div>
				</div>
			</div>
		</div>
	);
};
