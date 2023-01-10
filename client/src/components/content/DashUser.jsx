import { TbArrowBarRight } from 'react-icons/tb';
import {
	useUserContext,
	useDataUserContext,
	useGetTokenContext,
} from '../../context/UserProvider';
import { getSubscriber } from '../../api/user.api';
import { useEffect, useState } from 'react';
import { Alert } from './Alert';

export const DashUser = () => {
	const [count, setCount] = useState(0);
	const [divs, setDivs] = useState({
		pilot: true,
		payeer: false,
		jobUp: false,
	});
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
							<button
								className='shadow-md border-t-8 px-4 py-2 rounded-full'
								title='cerrar cuenta'
							>
								<TbArrowBarRight
									className='text-md'
									onClick={handleSessionClose}
								/>
							</button>
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
				<div className='ml-5 mr-5 px-2 rounded-l'>
					<ul className='shadow-lg text-left text-lg bg-gray-50 rounded-lg px-2 py-1'>
						<li
							onClick={() => {
								setDivs({ pilot: true, payeer: false, jobUp: false });
							}}
							className='bg-white hover:bg-gray-200 hover:text-gray-900 cursor-pointer mx-3 my-3 rounded-md pl-3'
						>
							<a href='#'>Presentaci&oacute;n del trabajo</a>
						</li>
						<li
							onClick={() => {
								setDivs({ pilot: false, payeer: false, jobUp: true });
							}}
							className='bg-white hover:bg-gray-200 hover:text-gray-900 cursor-pointer mx-3 my-3 rounded-md pl-3'
						>
							<a href='#'>Pago del evento</a>
						</li>
						<li
							onClick={() => {
								setDivs({ pilot: false, payeer: false, jobUp: true });
							}}
							className='bg-white hover:bg-gray-200 hover:text-gray-900 cursor-pointer mx-3 my-3 rounded-md pl-3'
						>
							<a href='#'>Trabajo a presentar</a>
						</li>
					</ul>
				</div>
				{divs.pilot && (
					<div className='ml-5 mr-5 bg-gray-100 rounded-lg shadow-lg px-2 py-2 mb-5'>
						<form className='text-lg'>
							<div className='text-left flex flex-col'>
								<div className='grid grid-cols-3'>
									<label htmlFor='abstract'>Resumen:</label>
									<div></div>
									<div className='text-right'>
										{count >= 0 && count <= 400 ? (
											<span className='text-xs text-right text-green-700 font-extrabold mb-0'>
												{count}
											</span>
										) : (
											<span className='rounded-full px-2 bg-red-100 text-red-500 text-xs text-right font-extrabold mb-0'>
												{count}
											</span>
										)}
									</div>
								</div>
								<textarea
									name='abstract'
									id='abstract'
									rows='4'
									className='border rounded-lg px-3 py-3 bg-gray-50 text-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
									placeholder='El trabajo trata...'
									onChange={e => {
										setCount(e.target.value.length);
									}}
								></textarea>
								<div className='mt-2 flex flex-col'>
									<label htmlFor='link_presentation'>
										Link de presentaci&oacute;n:
									</label>
									<input
										type='text'
										placeholder='http://...'
										className='border text-sm text-gray-700 rounded-md px-2 py-1 bg-gray-50  focus:ring-blue-500 focus:border-blue-500 block w-full focus:outline-none focus:shadow-outline focus:bg-blue-100/25'
									/>
								</div>
								<button className='mt-2 text-white font-semibold bg-blue-500 rounded-lg'>
									Enviar
								</button>
							</div>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};
