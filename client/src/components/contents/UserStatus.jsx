import { useEffect, useState } from 'react';
import { getDigestInstance } from '../../api/digest.instance.api';
import { getPayment } from '../../api/payment.api';
import { useUserContext } from '../../context/UserProvider';
import UserPayment from '../contents/UserPayment';
import Job from './Job';
import Repository from './Repository';

const UserStatus = () => {
	const { token } = useUserContext();
	const [divs, setDivs] = useState({});
	const [instances, setInstances] = useState(null);
	const [activeStatus, setActiveStatus] = useState(false);
	const [idIstance, setIdInstance] = useState(null);
	const [paid, setPaid] = useState(null);
	const [pay, setPay] = useState(null);

	const arrPaids = data => {
		setPaid(data.map(item => item.digestInstanceId));
	};

	useEffect(() => {
		async function getInstances(key) {
			const response = await getDigestInstance(key);
			setInstances(response.data);
			const payments = await getPayment(key);
			arrPaids(payments.data);
			setPay(payments.data);
		}
		getInstances(token);
	}, [activeStatus]);

	return (
		<>
			<div className='border static py-3 rounded-md border-blue-400'>
				<div className='relative flex justify-center text-gray-800 font-thin cursor-pointer'>
					<div
						className='px-2 hover:underline'
						onClick={() => {
							setDivs({ abstract: true });
							setActiveStatus(!activeStatus);
						}}
					>
						Res&uacute;menes
					</div>
					<div
						className='px-2 hover:underline'
						onClick={() => {
							setDivs({ payment: true });
							setActiveStatus(!activeStatus);
						}}
					>
						Pagos
					</div>
					<div
						className='px-2 hover:underline'
						onClick={() => {
							setDivs({ repository: true });
							setActiveStatus(!activeStatus);
						}}
					>
						Repositorio
					</div>
				</div>
				<span className='absolute flex text-xl font-semibold justify-start bg-white px-1 text-blue-400'>
					Men&uacute;
				</span>
			</div>
			{divs.repository && <Repository />}

			{divs.payment && (
				<div className='grid grid-cols-2'>
					{pay.map(
						({ id, transaction, digestInstanceId, status, createdAt }, i) => (
							<div
								key={id}
								className='mt-10 text-left border px-2 py-2 rounded-md mx-2'
							>
								<p>Fecha de ejecuci&oacute;n: {createdAt}</p>
								<p>Transacci&oacute;n: {transaction}</p>
								<div className='border px-3 py-1 rounded-md w-full text-center mt-1'>
									{status === 0 ? (
										'Sin aprobar'
									) : (
										<Job index={i} instance={digestInstanceId} />
									)}
								</div>
							</div>
						)
					)}
				</div>
			)}

			{divs.pay && (
				<UserPayment
					id={idIstance}
					divs={setDivs}
					active={activeStatus}
					setActive={setActiveStatus}
				/>
			)}

			{divs.abstract && (
				<div className='grid grid-cols-2'>
					{instances &&
						instances.map(
							({ id, abstract, nameLiving, nameEvent, status }) =>
								!paid.includes(id) && (
									<div
										key={id}
										className='mt-10 text-left border px-2 py-2 rounded-md mx-2'
									>
										<p>Evento: {nameEvent}</p>
										<p>Sala: {nameLiving}</p>
										<p className='py-2'>Resumen: {abstract}</p>
										<div className='border px-4 py-2 rounded-md w-full text-center'>
											{status === 0 ? (
												'Sin aprobar'
											) : (
												<button
													id={id}
													onClick={e => {
														setDivs({ pay: true });
														setIdInstance(e.target.id);
													}}
												>
													Efectuar pago
												</button>
											)}
										</div>
									</div>
								)
						)}
				</div>
			)}
		</>
	);
};

export default UserStatus;
