import { updatePayments } from '../../../api/payment.api';
import { useUserContext } from '../../../context/UserProvider';

const Paid = ({ items, active, setActive }) => {
	const { token } = useUserContext();
	const handleUpdate = async e => {
		await updatePayments(token, e.target.id);
		setActive(!active);
	};
	console.log(items);
	return (
		<div className='grid grid-cols-3'>
			{items.map(
				({
					id,
					category,
					dni,
					name,
					lastname,
					nameEvent,
					nameLiving,
					transaction,
					status,
				}) =>
					status !== 1 && (
						<div key={id} className='border my-2 py-2 px-2 rounded-lg'>
							<details className='cursor-pointer'>
								<summary>Transacci&oacute;n: {transaction}</summary>
								<div>
									<div className='flex'>
										<div className='pr-1'>
											{category === 0 ? 'Trabajador: ' : 'Estudiante: '}
										</div>
										<div>
											{name} {lastname}
										</div>
									</div>
									<div>DNI: {dni}</div>
									<div>Evento: {nameEvent}</div>
									<div>Sala: {nameLiving}</div>
									<button
										id={id}
										onClick={handleUpdate}
										className='border rounded-md w-full'
									>
										Aprobar
									</button>
								</div>
							</details>
						</div>
					)
			)}
		</div>
	);
};

export default Paid;
