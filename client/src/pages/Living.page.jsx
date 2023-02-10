import Main from '../components/container/Main';
import Title from '../components/contents/Title';
import { useEventContext } from '../context/UserProvider';
import { Info } from '../components/contents/Messages';
import Cards from '../components/container/Cards';
import { type } from '../types';
const Living = () => {
	const { livings } = useEventContext();
	return (
		<Main>
			{!livings && <Info msg={'Seleccione la sala que desea participar'} />}
			{livings && (
				<>
					<h5>Listado disponible</h5>
					<Title>Salas</Title>
					<Cards items={livings} type={type.living} />
				</>
			)}
		</Main>
	);
};

export default Living;
