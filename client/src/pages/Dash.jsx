import Main from '../components/container/Main';
import Title from '../components/contents/Title';
import { useUserContext } from '../context/UserProvider';
import { Warning } from '../components/contents/Messages';
import { useEffect, useState } from 'react';
import { getSubscriber } from '../api/user.api';
import User from '../components/contents/User';

const Dash = () => {
	const { token, setDataUser } = useUserContext();
	const [vhttp, setVHttp] = useState(null);

	useEffect(() => {
		try {
			async function getDataSubs(key) {
				const response = await getSubscriber(key);
				setVHttp(response.status);
				setDataUser(response.data);
			}
			getDataSubs(token);
		} catch (e) {
			setVHttp(e.response.status);
		}
	}, []);
	return (
		<Main>
			{!token && (
				<Warning
					msg={'Para acceder a los eventos se requiere estar autenticado'}
				/>
			)}
			{vhttp === 200 && (
				<>
					<h5>Vista de operaciones</h5>
					<Title>Panel de control</Title>
					<User status={setVHttp} />
				</>
			)}
			{vhttp !== 200 && (
				<Warning
					msg={
						'Solo se admiten suscriptores, para acceder debe crearse una cuenta'
					}
				/>
			)}
		</Main>
	);
};

export default Dash;
