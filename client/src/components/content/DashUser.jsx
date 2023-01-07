import {
	useUserContext,
	useDataUserContext,
	useGetTokenContext,
} from '../../context/UserProvider';
import { getSubscriber } from '../../api/user.api';
import { useEffect } from 'react';

export const DashUser = () => {
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
		}
		loadUser(token);
	}, []);

	const handleSessionClose = () => {
		setDataUser(null);
		setToken(null);
	};

	return (
		<>
			<div>Contenido del Dashborad condicional</div>
			{dataUser &&
				dataUser.map(data => (
					<div key={data.id}>
						<div>{data.name}</div>
						<div>{data.lastname}</div>
					</div>
				))}
			{!dataUser && (
				<div>
					<p>Se requiere que el usuario sea suscriptor valido</p>
				</div>
			)}
			<button className='bg-blue-600 px-4 py-4' onClick={handleSessionClose}>
				Salir
			</button>
		</>
	);
};
