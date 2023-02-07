import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { editCostEvent } from '../../../api/event.api';
import { Success } from '../../content/Alert';

const EditCostEvent = ({ events, active, setActive, token }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const [http, setHttp] = useState(null);

	const temp = () => {
		setTimeout(() => {
			setHttp(null);
		}, 4000);
	};

	const onSubmit = async body => {
		try {
			const response = await editCostEvent(token, body);
			setHttp(response.status);
			temp();
			setActive(!active);
		} catch (error) {
			setHttp(error.response.status);
			temp();
			console.log(error);
		}
	};

	return (
		<form
			className='max-w-[600px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className='text-4xl dark:text-white font-bold text-center'>
				Edit cost event
			</h2>
			{http === 200 && (
				<Success title={'Aceptado'} msg={'El evento ha sido editado'} />
			)}
			<div className='flex'>
				<div className='mr-4 w-full'>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='id'>Evento</label>
						<input
							{...register('id', {
								required: true,
								minLength: 36,
							})}
							placeholder='Seleccione el evento'
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
							list='event'
						/>
						{errors.id?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
						<datalist id='event'>
							{events &&
								events.map(({ id, name }) => (
									<option key={id} value={id}>
										{name}
									</option>
								))}
						</datalist>

						{errors.name?.type === 'minLength' && (
							<span className='text-orange-400 font-extralight'>
								Id invalido
							</span>
						)}
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='cost'>Costo:</label>
						<input
							{...register('cost', {
								required: true,
								pattern: /^\d+(.\d{1,2})?$/i,
							})}
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
						{errors.cost?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
						{errors.cost?.type === 'pattern' && (
							<p className='text-red-500 font-extralight'>
								El campo es incorrecto
							</p>
						)}
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<label htmlFor='target'>N&uacute;mero targeta</label>
						<input
							{...register('target', {
								required: true,
								minLength: 16,
								maxLength: 19,
								pattern: /^[-0-9]+$/i,
							})}
							type='text'
							className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
						/>
						{errors.target?.type === 'required' && (
							<span className='text-orange-400 font-extralight'>
								El campo es requerido
							</span>
						)}
						{errors.target?.type === 'minLength' && (
							<span className='text-red-400 font-extralight'>
								El campo debe tener minimo 16 caracteres
							</span>
						)}
						{errors.target?.type === 'maxLength' && (
							<span className='text-red-400 font-extralight'>
								El campo debe tener maximo 19 caracteres
							</span>
						)}
						{errors.target?.type === 'pattern' && (
							<span className='text-red-400 font-extralight'>
								El campo solo acepta numeros y guiones
							</span>
						)}
					</div>
				</div>
			</div>

			<button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
				Editar evento
			</button>
		</form>
	);
};

export default EditCostEvent;
