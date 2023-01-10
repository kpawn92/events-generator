import {
	useUserContext,
	useDataUserContext,
	useGetTokenContext,
} from '../../context/UserProvider';
import { getSubscriber } from '../../api/user.api';
import { useEffect, useState } from 'react';
import { Alert } from './Alert';

export const DashUser = () => {
	const [count, setCount] = useState(400);
	const {
		token: { token },
	} = useUserContext();

	const { dataUser } = useUserContext();
	const setDataUser = useDataUserContext();
	const setToken = useGetTokenContext();

	useEffect(() => {
		async function loadUser(token) {
			const response = await getSubscriber(token);
			setDataUser(response.data);
			console.log(response);
		}
		loadUser(token);
	}, []);

	const handleSessionClose = () => {
		setDataUser(null);
		setToken(null);
	};
	/* ESTUDIAR INCLUDE EN LOS ARRAY */
	const handleKey = e => {
		e.key === 'Backspace' ? setCount(count + 1) : setCount(count - 1);
	};

	return (
		<div className='text-center py-10'>
			<div className='text-4xl w-96 mx-auto leading-normal font-bold mb-12 text-gray-800'>
				Panel de control
			</div>
			<div className='text-left my-4 ml-5 mr-5'>
				{dataUser &&
					dataUser.map(data => (
						<div key={data.id}>
							<div>
								Participante: {data.name} {data.lastname}
							</div>
						</div>
					))}
			</div>
			{!dataUser && (
				<div className='my-4'>
					<Alert
						title='Alert'
						msg='Se requiere que el usuario sea suscriptor valido'
					/>
				</div>
			)}
			<div className='grid lg:grid-cols-2 my-3 w-full'>
				<div className='ml-5 mr-5'>
					<ul className='text-left text-lg'>
						<li>
							<a href='#' className='hover:underline hover:text-blue-600'>
								Resumen del trabajo a presentar
							</a>
						</li>
						<li>
							<a href='#' className='hover:underline hover:text-blue-600'>
								Pago del evento
							</a>
						</li>
						<li>
							<a href='#' className='hover:underline hover:text-blue-600'>
								Trabajo a presentar
							</a>
						</li>
					</ul>
				</div>
				<div className='ml-5 mr-5 bg-gray-50 rounded-lg shadow-lg px-2 py-2 mb-5'>
					<form className='text-lg'>
						<div className='text-left flex flex-col'>
							<div className='grid grid-cols-3'>
								<label htmlFor='abstract'>Resumen:</label>
								<div></div>
								<div className='text-right'>
									<span className='text-xs text-right text-green-700 font-extrabold mb-0'>
										{count}
									</span>
								</div>
							</div>
							<textarea
								name='abstract'
								id='abstract'
								rows='6'
								className='border rounded-lg px-3 py-3 bg-gray-100  focus:ring-blue-500 focus:border-blue-500 block w-full focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
								placeholder='El trabajo trata...'
								onKeyDown={handleKey}
							></textarea>
							<button className='mt-2 text-white font-semibold bg-blue-500 rounded-lg'>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
			<button
				className='bg-blue-600 px-4 py-4 text-white'
				onClick={handleSessionClose}
			>
				Salir
			</button>
		</div>
	);
};
