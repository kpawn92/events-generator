import { useUserContext } from '../context/UserProvider';
import { DashUser } from '../components/content/DashUser';
import { Warning } from '../components/content/Alert';
const JobPage = () => {
	const { token } = useUserContext();
	return (
		<>
			{!token && (
				<Warning
					title='Aviso'
					msg='Para participar en los eventos es requerido estar autenticado'
				/>
			)}
			{token && <DashUser />}
		</>
	);
};
export default JobPage;
