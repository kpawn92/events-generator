import { useState, useEffect } from 'react';
import { getNameJobs } from '../../api/job.api';
import { VITE_PUBLIC_URL } from '../../config/env';
import { useUserContext } from '../../context/UserProvider';

const Repository = () => {
	const [jobs, setJobs] = useState(null);
	const { token } = useUserContext();
	useEffect(() => {
		async function getJobs(key) {
			const response = await getNameJobs(key);
			setJobs(response.data);
		}
		getJobs(token);
	}, []);
	return (
		<div className='mt-10'>
			<h3>Listado de trabajos </h3>
			{jobs && (
				<ul className='text-left hover:text-blue-500'>
					{jobs.map((item, i) => (
						<li key={i}>
							<a
								className='hover:underline'
								target='_blank'
								rel='noopener noreferrer'
								href={VITE_PUBLIC_URL + '/' + item.name}
							>
								{i === 0 ? '1' : `${i}`}. {item.name}
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Repository;
