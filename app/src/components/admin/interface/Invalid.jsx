import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUserContext } from '../../../context/UserProvider';
import { invalidUserById } from '../../../api/user.api';
import { Success, Warning } from '../../content/Alert';
export const Invalid = () => {
	const [http, setHttp] = useState(null);

	const { token, data } = useUserContext();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const temp = () => setTimeout(() => setHttp(null), 4000);

	const onSubmit = async ({ id }) => {
		try {
			const response = await invalidUserById(token, id);
			setHttp(response.status);
			temp();
		} catch (error) {
			console.log(error);
			setHttp(error.response.status);
			temp();
		}
	};

	return (
		<form
			className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2 className='uppercase text-4xl dark:text-white font-bold text-center'>
				Invalid
			</h2>

			{http === 404 && <Warning title={'Warning'} msg='Codigo incorrecto' />}
			{http === 200 && <Success title={'Success'} msg='Usuario invalidado' />}

			<div className='flex flex-col text-gray-400 py-2'>
				<label htmlFor='id'>Codigo</label>
				<input
					{...register('id', {
						required: true,
					})}
					placeholder='Selecciona el DNI'
					type='text'
					className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
					list='dni'
				/>
				{errors.id?.type === 'required' && (
					<span className='text-orange-400 font-extralight'>
						El campo es requerido
					</span>
				)}
				<datalist id='dni'>
					{data
						.filter(item => item.status !== 0)
						.map(item => (
							<option key={item.id} value={item.id}>
								{item.dni}
							</option>
						))}
				</datalist>
			</div>
			<button className='w-full my-5 py-2 bg-teal-500 shadow-lg hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
				Enviar
			</button>
		</form>
	);
};
