import { useState, useEffect } from 'react';
import { getDigestInstances } from '../../../api/digestInstance.api';
import { useUserContext } from '../../../context/UserProvider';

const Abstract = () => {
	const { token } = useUserContext();
	const [abstracts, setAbstracts] = useState(null);

	useEffect(() => {
		if (token) {
			async function resumenes(key) {
				const response = await getDigestInstances(key);
				setAbstracts(response.data);
				console.log(response.data);
			}
			resumenes(token);
		}
	}, []);
	return (
		<>
			{abstracts && (
				<div className='border w-full mx-1 px-2'>
					{abstracts.map(({ id, name, lastname, dni }) => (
						<div key={id} className='flex'>
							<div>
								{name} {lastname}
							</div>
							<div>{dni}</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Abstract;
