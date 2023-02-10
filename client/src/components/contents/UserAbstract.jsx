import { useEventContext, useUserContext } from '../../context/UserProvider';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { setDigestInstance } from '../../api/digest.instance.api';
import { Info } from './Messages';

const UserAbstract = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const [divs, setDivs] = useState({
		home: true,
	});
	const [link, setLink] = useState(null);
	const [vhttp, setVhttp] = useState(null);
	const { event, selectLiving } = useEventContext();
	const { token } = useUserContext();

	const onSubmit = async body => {
		try {
			body.fk_living = selectLiving.id;
			const response = await setDigestInstance(token, body);
			setVhttp(response.status);
		} catch (e) {
			console.log(e);
			setVhttp(e.response.status);
		}
	};

	return (
		<div className='rounded-md'>
			{divs.home && (
				<>
					<div className='px-2 font-semibold'>
						Evento: {event.name}
						<div className='px-2'>Sala: {selectLiving.name}</div>
					</div>
					<div
						className='flex justify-center items-center'
						onClick={() => setDivs({ abstract: true })}
					>
						<AiOutlinePlusCircle className='text-5xl hover:text-blue-600 cursor-pointer' />
					</div>
				</>
			)}
			{divs.abstract && (
				<div className='mt-4'>
					{vhttp === 200 && <Info msg={'Resumen creado satisfactoriamente'} />}
					<div className='border static rounded-lg border-blue-400'>
						<div
							className='flex justify-start items-center'
							onClick={() => setDivs({ home: true })}
						>
							{/* <span className='cursor-pointer'>Cancelar</span> */}
							<div className='absolute px-1 bg-white'>
								<FaTimes className='text-4xl text-blue-400 hover:text-blue-500 cursor-pointer' />
							</div>
						</div>
						<form className='form' onSubmit={handleSubmit(onSubmit)}>
							<div className='flex flex-col mt-3'>
								<label
									htmlFor='link'
									className='label text-left hover:underline hover:text-blue-500 cursor-pointer'
									onClick={() => setLink(!link)}
								>
									Link de presentacion
								</label>
								{link && (
									<>
										<input
											type='text'
											id='link_presentation'
											name='link_presentation'
											{...register('link_presentation')}
											placeholder='https://mylink.presentation.com'
											className='border-b-2 border-gray-600 py-2 px-4 text-lg rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block focus:shadow-outline focus:bg-blue-100/25'
										/>
									</>
								)}
							</div>
							<div className='flex flex-col'>
								<label
									htmlFor='abstract'
									className='label text-left flex justify-between'
								>
									Resumen del trabajo
								</label>
								<textarea
									onChange={e => {
										console.log(e);
									}}
									name='abstract'
									id='abstract'
									cols='30'
									rows='2'
									{...register('abstract', {
										required: true,
										pattern: /^[ .a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i,
										maxLength: 400,
									})}
									className='border-b-2 border-blue-400 py-2 px-4 text-lg rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block focus:shadow-outline focus:bg-blue-100/25'
									placeholder='Breve resumen del trabajo...'
								></textarea>
								{errors && (
									<div>
										{errors.abstract?.type === 'required' && (
											<span className='span-warning'>
												El campo es requerido
											</span>
										)}
										{errors.abstract?.type === 'pattern' && (
											<span className='span-danger'>
												El campo es incorrecto
											</span>
										)}
										{errors.abstract?.type === 'maxLength' && (
											<span className='span-danger'>
												No exceder de los 400 carateres
											</span>
										)}
									</div>
								)}
							</div>

							<div className='text-left mt-3 mb-3'>
								<button className='text-white font-semibold py-3 px-4 rounded-lg bg-blue-400'>
									Enviar
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserAbstract;
