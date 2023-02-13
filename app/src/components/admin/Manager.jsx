import { useState, useEffect } from 'react';
import { useGetTokenContext, useUserContext } from '../../context/UserProvider';
import Header from './layout/Header';
import ButtonClose from './interface/ButtonClose';
import Container from './interface/Container';
import { getJobs } from '../../api/job.api';
import Jobs from './interface/Jobs';

const links = [{ label: 'Trabajos', route: 'job' }];

const Manager = () => {
	const { token, dataUser, setDataUser, setData } = useUserContext();
	const setToken = useGetTokenContext();

	const [divs, setDivs] = useState({
		job: true,
	});

	const [jobs, setJobs] = useState(null);

	useEffect(() => {
		async function jobs(key) {
			const response = await getJobs(key);
			setJobs(response.data);
		}
		jobs(token);
	}, []);

	return (
		<>
			<Header
				links={links}
				dataUser={dataUser}
				setDivs={setDivs}
				role='Manager'
			>
				<ButtonClose state={{ setToken, setData, setDataUser }} />
			</Header>

			<Container>{divs.job && jobs && <Jobs items={jobs} />}</Container>
		</>
	);
};

export default Manager;
