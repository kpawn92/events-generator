import Main from '../components/container/Main';
import Title from '../components/contents/Title';
import { useEventContext } from '../context/UserProvider';
import { Info } from '../components/contents/Messages';
const Living = () => {
	const { selectEvent } = useEventContext();
	return (
		<Main>
			{selectEvent && (
				<>
					<h5>Listado disponible</h5>
					<Title>Salas</Title>
				</>
			)}
			{!selectEvent && <Info msg={'Seleccione la sala que desea participar'} />}
		</Main>
	);
};

export default Living;
