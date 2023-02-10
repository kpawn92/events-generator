import { TbArrowBarRight } from 'react-icons/tb';
import { useUserContext } from '../../context/UserProvider';
const User = ({ status }) => {
	const { dataUser, setToken, setDataUser } = useUserContext();
	return (
		<>
			{dataUser &&
				dataUser.map(data => (
					<div key={data.id} className='py-2'>
						<div className='flex justify-between'>
							<div className='flex items-center'>
								Participante:{' '}
								<span className='text-base font-semibold ml-1'>
									{data.name} {data.lastname}
								</span>
							</div>
							<button
								className='flex justify-center items-center px-4 py-2 hover:shadow-lg rounded-md'
								title='cerrar cuenta'
								onClick={() => {
									setDataUser(null);
									setToken(null);
									status(null);
								}}
							>
								<span className='mr-1'>Salir</span>
								<TbArrowBarRight className='text-md' />
							</button>
						</div>
						<div className='text-left flex flex-col py-1'>
							<span>
								Catergoria: {data.category === 1 ? 'Estudiante' : 'Trabajador'}
							</span>
							<span>Institución: {data.institution}</span>
							<span>DNI: {data.dni}</span>
						</div>
					</div>
				))}
		</>
	);
};

export default User;
