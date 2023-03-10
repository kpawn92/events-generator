import { useState, useEffect } from 'react';
import {
	getDigestInstances,
	updateStatusDigestInstances,
} from '../../../api/digestInstance.api';
import { useUserContext } from '../../../context/UserProvider';

const Abstract = () => {
	const { token } = useUserContext();
	const [abstracts, setAbstracts] = useState(null);
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (token) {
			async function resumenes(key) {
				const response = await getDigestInstances(key);
				setAbstracts(response.data);
			}
			resumenes(token);
		}
	}, [active]);

	const handleOnclik = async e => {
		try {
			await updateStatusDigestInstances(token, e.target.id);
			setActive(!active);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<>
			{abstracts && (
				<div className='w-full mx-1 px-3 rounded-md py-2'>
					{abstracts.map(
						({
							id,
							name,
							lastname,
							dni,
							institution,
							category,
							abstract,
							nameliving,
							link,
						}) => (
							<div
								key={id}
								className='border rounded-lg px-2 py-1 flex flex-col mt-4'
							>
								<div className='flex justify-between'>
									<div>
										{category === 0 ? 'Trabajador' : 'Estudiante'}: {name}{' '}
										{lastname}
									</div>
									<div>DNI: {dni}</div>
									<div>Centro: {institution}</div>
								</div>
								<details>
									<summary className='cursor-pointer'>
										Resumen del trabajo
									</summary>
									{link !== '0' && (
										<div>
											URL:{' '}
											<a
												className='hover:underline'
												href={link}
												target='_blank'
												rel='noopener noreferrer'
											>
												{link}
											</a>
										</div>
									)}
									<div>Sala: {nameliving}</div>
									<div>{abstract}</div>
									<button
										onClick={handleOnclik}
										id={id}
										className='border bg-gray-700 my-2 rounded-md w-full'
									>
										Aprobar
									</button>
								</details>
							</div>
						)
					)}
				</div>
			)}
		</>
	);
};

export default Abstract;
