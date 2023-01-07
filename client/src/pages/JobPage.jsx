import { useUserContext } from '../context/UserProvider';
import { DashUser } from '../components/content/DashUser';
const JobPage = () => {
	const { token } = useUserContext();
	return (
		<>
			<div>Dashborad para subscriber</div>
			{token && <DashUser />}
		</>
	);
};
export default JobPage;
