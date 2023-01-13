import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../../context/UserProvider';

export const ProtectedRoute = () => {
	const { token } = useUserContext();

	if (!token) return <Navigate to='/' />;

	return <Outlet />;
};
