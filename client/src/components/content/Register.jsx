import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { codePais } from '../../api/code.pais';
import { sigUp } from '../../api/auth.api';
import { Alert } from '../../components/content/Alert';

export const Register = () => {
	const [http, setHttp] = useState(null);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async body => {
		try {
			async function creteaUser(data) {
				await sigUp(data);
			}
			body.category = parseFloat(body.category);
			console.log(body);
			creteaUser(body);
		} catch (error) {
			setHttp(error.response.status);
			console.log(error.response.status);
		}
	};
	const [check, setCheck] = useState(false);
	return (
		<>
			<div className='flex flex-col sm:flex-none text-center py-10'>
				<div className='text-4xl lg:w-96 mx-auto leading-normal font-bold mb-12'>
					Registro
				</div>
				<form className='w-auto px-10' onSubmit={handleSubmit(onSubmit)}>
					<div className='grid lg:grid-cols-2 text-left my-3 w-full'>
						<div className='ml-5'>
							<label htmlFor='name' className='text-lg py-2 text-gray-900'>
								Nombre(s)
							</label>
							<input
								type='text'
								id='name'
								{...register('name', {
									required: true,
									pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i,
								})}
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
							/>
							{errors && (
								<div>
									{errors.name?.type === 'required' && (
										<span className='text-orange-400 font-extralight'>
											El campo nombre es requerido
										</span>
									)}
									{errors.name?.type === 'pattern' && (
										<span className='text-red-500 font-extralight'>
											El nombre es incorrecto
										</span>
									)}
								</div>
							)}
							<label htmlFor='lastname' className='text-lg py-2 text-gray-900'>
								Apellidos
							</label>
							<input
								type='text'
								id='lastname'
								{...register('lastname', {
									required: true,
									pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i,
								})}
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
							/>
							{errors && (
								<div>
									{errors.lastname?.type === 'required' && (
										<span className='text-orange-400 font-extralight'>
											El campo apellidos es requerido
										</span>
									)}
									{errors.lastname?.type === 'pattern' && (
										<span className='text-red-500 font-extralight'>
											El/los apellido(s) es/son incorrecto
										</span>
									)}
								</div>
							)}
							<label htmlFor='nation' className='text-lg py-2 text-gray-900'>
								Nacionalidad
							</label>
							<input
								type='text'
								id='nation'
								{...register('nation', {
									required: true,
								})}
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
								list='paises'
							/>
							{errors && (
								<div>
									{errors.nation?.type === 'required' && (
										<span className='text-orange-400 font-extralight'>
											El campo es requerido
										</span>
									)}
								</div>
							)}
							<datalist id='paises'>
								{Object.entries(codePais).map(pais => (
									<option
										key={pais[0]}
										value={pais[1] + '-' + pais[0]}
									></option>
								))}
							</datalist>
							<label htmlFor='dni' className='text-lg py-2 text-gray-900'>
								DNI
							</label>
							<input
								type='text'
								id='dni'
								{...register('dni', {
									required: true,
									minLength: 11,
									pattern: /^[0-9]+$/i,
								})}
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
							/>
							{errors && (
								<div>
									{errors.dni?.type === 'required' && (
										<span className='text-orange-400 font-extralight'>
											El campo es requerido
										</span>
									)}
									{errors.dni?.type === 'minLength' && (
										<span className='text-orange-400 font-extralight'>
											No menos de 11 caracteres
										</span>
									)}
									{errors.dni?.type === 'pattern' && (
										<span className='text-red-500 font-extralight'>
											El campo es incorrecto
										</span>
									)}
								</div>
							)}
						</div>

						<div className='ml-5'>
							<label
								htmlFor='institution'
								className='text-lg py-2 text-gray-900'
							>
								Instituci&oacute;n
							</label>
							<input
								type='text'
								id='institution'
								{...register('institution', {
									required: true,
									pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i,
								})}
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
							/>
							{errors && (
								<div>
									{errors.institution?.type === 'required' && (
										<span className='text-orange-400 font-extralight'>
											El campo es requerido
										</span>
									)}
									{errors.institution?.type === 'pattern' && (
										<span className='text-red-500 font-extralight'>
											El campo es incorrecto
										</span>
									)}
								</div>
							)}
							<label htmlFor='category' className='text-lg py-2 text-gray-900'>
								Categoria
							</label>
							<input
								type='text'
								id='category'
								{...register('category', {
									required: true,
									pattern: /^[0-1]{1}$/i,
								})}
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
								list='categ'
							/>
							{errors && (
								<div>
									{errors.category?.type === 'required' && (
										<span className='text-orange-400 font-extralight'>
											El campo es requerido
										</span>
									)}
									{errors.category?.type === 'pattern' && (
										<span className='text-red-500 font-extralight'>
											El campo es incorrecto
										</span>
									)}
								</div>
							)}
							<datalist id='categ'>
								<option value='0'>Trabajador</option>
								<option value='1'>Estudiante</option>
							</datalist>
							<label htmlFor='dni' className='text-lg py-2 text-gray-900'>
								Correo electr&oacute;nico
							</label>
							<input
								type='text'
								id='email'
								{...register('email', {
									required: true,
									pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
								})}
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
							/>
							{errors && (
								<div>
									{errors.email?.type === 'required' && (
										<span className='text-orange-400 font-extralight'>
											El campo es requerido
										</span>
									)}
									{errors.email?.type === 'pattern' && (
										<span className='text-red-500 font-extralight'>
											El campo es incorrecto
										</span>
									)}
								</div>
							)}
							<label htmlFor='dni' className='text-lg py-2 text-gray-900'>
								Contrase&ntilde;a
							</label>
							<input
								type='password'
								id='password'
								{...register('password', {
									required: true,
								})}
								className='w-full shadow-sm border border-gray-600/10 rounded-md bg-gray-50 py-2 pl-4 pr-4 text-gray-900  hover:bg-white focus:ring-blue-500 focus:border-blue-500 block focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
							/>
							{errors && (
								<div>
									{errors.password?.type === 'required' && (
										<span className='text-orange-400 font-extralight'>
											El campo es requerido
										</span>
									)}
								</div>
							)}
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
					<div>
						<Alert title='Alert' msg='El correo ya existe' />
					</div>
				</form>
			</div>
		</>
	);
};
