import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext, useDataUserContext } from '../../context/UserProvider';
import { getUser } from '../../api/user.api';

export const ProtectedRoute = () => {
	const { token } = useUserContext();

	if (!token) return <Navigate to='/' />;

	const setDataUser = useDataUserContext();

	useEffect(() => {
		async function load(tok) {
			const response = await getUser(tok);
			setDataUser(response.data[0]);
		}
		load(token);
	}, []);

	return <Outlet />;
};
