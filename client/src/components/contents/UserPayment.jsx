import { useState } from 'react';
import { setPayment } from '../../api/payment.api';
import { useUserContext } from '../../context/UserProvider';
import { Alert } from './Messages';

const UserPayment = ({ id, divs, active, setActive }) => {
	const { token } = useUserContext();
	const [err, setErr] = useState(null);

	const handleSubmit = async e => {
		try {
			e.preventDefault();

			const body = {
				transaction: e.target.transaction.value,
				fk_digestInstance: id,
			};

			await setPayment(token, body);
			divs({ payment: true });
		} catch (e) {
			console.log(e);
			setErr(e.response.status);
			setTimeout(() => setErr(null), 3000);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='mt-10 mx-44'>
			{err && <Alert msg={'La instancia ya existe'} />}
			<div className='flex flex-col text-left my-2'>
				<label htmlFor='transaction'>N&uacute;mero de transacci&oacute;n</label>
				<input
					type='text'
					name='transaction'
					id='transaction'
					className='border mt-2 py-2 px-3 rounded-md w-full'
					required
				/>
			</div>
			<button
				onClick={() => setActive(!active)}
				className='border mt-2 py-2 px-3 rounded-md w-full'
			>
				Enviar
			</button>
		</form>
	);
};

export default UserPayment;
