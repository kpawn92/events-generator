import { useEffect, useState } from 'react';
import { getDigestInstance } from '../../api/digest.instance.api';
import { useUserContext } from '../../context/UserProvider';
import { typeStatus } from '../../types';
import UserPayment from './UserPayment';
// import UserPayment from './UserPayment';

const UserStatus = () => {
	const { token } = useUserContext();
	const [divs, setDivs] = useState({});
	const [instances, setInstances] = useState(null);
	const [activeStatus, setActiveStatus] = useState(null);

	useEffect(() => {
		if (activeStatus === 0) {
			async function getInstances(key) {
				const response = await getDigestInstance(key);
				setInstances(response.data);
			}
			getInstances(token);
		}
	}, [activeStatus]);

	return (
		<>
			<div className='border static py-3 rounded-md border-blue-400'>
				<div className='relative flex justify-center text-gray-800 font-thin cursor-pointer'>
					<div
						className='px-2 hover:underline'
						onClick={() => {
							setDivs({ abstract: true });
							setActiveStatus(typeStatus.abstract);
						}}
					>
						Trabajos
					</div>
					<div
						className='px-2 hover:underline'
						onClick={() => {
							setDivs({ payment: true });
							setActiveStatus(typeStatus.payment);
						}}
					>
						Revisar despues
					</div>
				</div>
				<span className='absolute flex justify-start bg-white px-1 text-blue-500'>
					Estados
				</span>
			</div>
			{divs.payment && <UserPayment />}
			{divs.abstract && (
				<div className='grid grid-cols-2'>
					{instances &&
						instances.map(({ id, abstract, nameLiving, nameEvent, status }) => (
							<div
								key={id}
								className='mt-10 text-left border px-2 py-2 rounded-md mx-2'
							>
								<p>Evento: {nameEvent}</p>
								<p>Sala: {nameLiving}</p>
								<p className='py-2'>Resumen: {abstract}</p>
								<div className='border px-4 py-2 rounded-md w-full text-center'>
									{status === 0 ? 'Sin aprobar' : 'Aprobado'}
								</div>
							</div>
						))}
				</div>
			)}
		</>
	);
};

export default UserStatus;
