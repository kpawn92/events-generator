import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUserContext } from '../../../context/UserProvider';
import { addMgr } from '../../../api/auth.api';
import { Success, Warning } from '../../content/Alert';

const AddMgr = ({ active, setActive }) => {
	const [http, setHttp] = useState(null);

	const { token } = useUserContext();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const temp = () =>
		setTimeout(() => {
			setHttp(null);
		}, 4000);

	const onSubmit = async body => {
		try {
			const newBody = { ...body, role: 'manager' };
			const response = await addMgr(token, newBody);
			setHttp(response.status);
			temp();
			setActive(!active);
		} catch (error) {
			console.log(error);
			setHttp(error.response.status);
			temp();
		}
	};
	return (
		<form
			className='max-w-[600px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className='text-3xl dark:text-white font-bold text-center uppercase'>
				Add manager
			</h2>
			{http === 200 && (
				<Success title={'Success'} msg='Usuario creado satisfactoriamente' />
			)}
			{http === 404 && <Warning title={'Adevertencia'} msg='Correo ya usado' />}
			{http === 400 && (
				<Warning title={'Adevertencia'} msg='Usuario ya existe' />
			)}
			<div className='flex'>
				<div className='mr-4 w-full'>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='name'>Nombre(s)</label>
						<input
							{...register('name', {
								required: true,
								pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i,
							})}
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
						{errors.name?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
						{errors.name?.type === 'pattern' && (
							<p className='text-red-500 font-extralight'>
								El campo es incorrecto
							</p>
						)}
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='lastname'>Apellidos</label>
						<input
							{...register('lastname', {
								required: true,
								pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i,
							})}
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
						{errors.lastname?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
						{errors.lastname?.type === 'pattern' && (
							<p className='text-red-500 font-extralight'>
								El campo es incorrecto
							</p>
						)}
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='dni'>DNI</label>
						<input
							{...register('dni', {
								required: true,
								pattern: /^[0-9]+$/i,
							})}
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
						{errors.dni?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
						{errors.dni?.type === 'pattern' && (
							<p className='text-red-500 font-extralight'>
								El campo es incorrecto
							</p>
						)}
					</div>
				</div>
				<div className='w-full'>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='email'>Email</label>
						<input
							{...register('email', {
								required: true,
								pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
							})}
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
						{errors.email?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
						{errors.email?.type === 'pattern' && (
							<p className='text-red-500 font-extralight'>
								El email es incorrecto
							</p>
						)}
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='password'>Contrase&ntilde;a</label>
						<input
							{...register('password', {
								required: true,
							})}
							type='password'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
						{errors.password?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
					</div>
				</div>
			</div>

			<button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
				Crear usuario
			</button>
		</form>
	);
};

export default AddMgr;
