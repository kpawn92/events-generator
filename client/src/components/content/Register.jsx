import { Link } from 'react-router-dom';
import { useState } from 'react';
import { codePais } from '../../api/code.pais';

export const Register = () => {
	const [check, setCheck] = useState(false);
	return (
		<>
			<div className='flex flex-col sm:flex-none text-center py-10'>
				<div className='text-4xl lg:w-96 mx-auto leading-normal font-bold mb-12'>
					Registro
				</div>
				<form className='w-auto px-10'>
					<div className='grid lg:grid-cols-2 text-left my-3 w-full'>
						<div className='ml-5'>
							<label htmlFor='name' className='text-lg py-2 text-gray-900'>
								Nombre(s)
							</label>
							<input
								type='text'
								id='name'
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
							/>
							<label htmlFor='lastname' className='text-lg py-2 text-gray-900'>
								Apellidos
							</label>
							<input
								type='text'
								id='lastname'
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
							/>
							<label htmlFor='nation' className='text-lg py-2 text-gray-900'>
								Nacionalidad
							</label>
							<input
								type='text'
								id='nation'
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
								list='paises'
							/>
							<datalist id='paises'>
								{Object.entries(codePais).map(pais => (
									<option
										key={pais[0]}
										value={pais[1] + '-' + pais[0]}
									></option>
								))}
							</datalist>
						</div>

						<div className='ml-5'>
							<label htmlFor='dni' className='text-lg py-2 text-gray-900'>
								DNI
							</label>
							<input
								type='text'
								id='dni'
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
							/>
							<label
								htmlFor='institution'
								className='text-lg py-2 text-gray-900'
							>
								Instituci&oacute;n
							</label>
							<input
								type='text'
								id='institution'
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
							/>
							<label htmlFor='category' className='text-lg py-2 text-gray-900'>
								Categoria
							</label>
							<input
								type='text'
								id='category'
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
								list='categ'
							/>
							<datalist id='categ'>
								<option value='0'>Trabajador</option>
								<option value='1'>Estudiante</option>
							</datalist>
						</div>
					</div>

					<div className='flex items-center ml-5'>
						<input
							type='checkbox'
							id='link-checkbox'
							className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
							onClick={() => setCheck(!check)}
						/>
						<label
							htmlFor='link-checkbox'
							className='ml-2 text-sm font-medium text-gray-900'
						>
							Estoy de acuerdo con los{' '}
							<Link to='/rules' className='text-blue-600 hover:underline'>
								t&eacute;rminos y condiciones
							</Link>
						</label>
					</div>
					{check ? (
						<div className='mt-2'>
							<button className='bg-blue-500 text-white py-2 px-3 rounded-md hover:shadow-lg'>
								Guardar resgistro
							</button>
						</div>
					) : (
						<div className='mt-2'>
							<button
								type='button'
								className='bg-blue-500 text-white py-2 px-3 rounded-md hover:shadow-lg opacity-50 cursor-not-allowed'
							>
								Guardar resgistro
							</button>
						</div>
					)}
				</form>
			</div>
		</>
	);
};
