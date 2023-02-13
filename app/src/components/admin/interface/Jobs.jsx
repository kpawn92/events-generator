import { VITE_PUBLIC_URL } from '../../../config/env';

const Jobs = ({ items }) => {
	return (
		<div className='text-left w-full'>
			{items.map(
				({
					id,
					category,
					createdAt,
					name,
					lastname,
					dni,
					nameJob,
					nameEvent,
					nameLiving,
				}) => (
					<div
						key={id}
						className='border py-1 px-2 my-3 mx-2 rounded-lg cursor-pointer'
					>
						<details>
							<summary>
								{category === 1 ? 'Estudiante' : 'Trabajador'}: {name}{' '}
								{lastname}
							</summary>
							<div>
								<a
									href={VITE_PUBLIC_URL + nameJob}
									className='hover:underline'
									target='_blank'
									rel='noopener noreferrer'
								>
									{nameJob}
								</a>
							</div>
							<div>Fecha: {createdAt}</div>
							<div className='flex justify-between'>
								<div>DNI: {dni}</div>
								<div>Evento: {nameEvent}</div>
								<div>Sala: {nameLiving}</div>
							</div>
						</details>
					</div>
				)
			)}
		</div>
	);
};

export default Jobs;
