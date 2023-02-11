import Main from '../components/container/Main';
import Title from '../components/contents/Title';
import { useEventContext, useUserContext } from '../context/UserProvider';
import { Warning } from '../components/contents/Messages';
import { useEffect, useState } from 'react';
import { getSubscriber } from '../api/user.api';
import User from '../components/contents/User';
import UserAbstract from '../components/contents/UserAbstract';
import UserStatus from '../components/contents/UserStatus';

const Dash = () => {
	const { selectLiving } = useEventContext();
	const { token, setDataUser } = useUserContext();
	const [vhttp, setVHttp] = useState(null);

	useEffect(() => {
		try {
			if (token) {
				async function getDataSubs(key) {
					const response = await getSubscriber(key);
					setVHttp(response.status);
					setDataUser(response.data);
				}
				getDataSubs(token);
			}
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
					<UserStatus />
					<User status={setVHttp} />
					{selectLiving && <UserAbstract />}
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
