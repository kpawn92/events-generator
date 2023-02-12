import { useState } from 'react';
import { updateJob, upload } from '../../api/job.api';
import { useUserContext } from '../../context/UserProvider';
import { Alert, Success } from './Messages';

const Job = ({ index, instance }) => {
	const [field, setField] = useState(false);
	const [http, setHttp] = useState(null);

	const { token } = useUserContext();

	const temp = () => setTimeout(() => setHttp(null), 3000);

	const handleSubmit = async e => {
		try {
			e.preventDefault();
			const response = await upload(token, e.target.file.files[0]);
			await updateJob(token, {
				id: response.data.id,
				fk_digest_instance: instance,
			});
			setHttp(200);
			temp();
			setField(!field);
		} catch (e) {
			setHttp(500);
			temp();
		}
	};
	return (
		<form key={index} className='flex flex-col' onSubmit={handleSubmit}>
			<button type='button' onClick={() => setField(!field)}>
				Subir trabajo
			</button>
			{field && (
				<div>
					{http === 200 && (
						<Success msg={'El trabajo fue guardado satisfactoriamente'} />
					)}
					{http === 500 && (
						<Alert msg={'Invalido el tipo de formato que desea guardar'} />
					)}
					<input
						className='mt-2 block w-full mb-5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400'
						name='file'
						type='file'
						required
					/>
					<button className='border rounded-md w-full py-1 my-1'>Enviar</button>
				</div>
			)}
		</form>
	);
};

export default Job;
