import { useEventContext } from '../../context/UserProvider';

const UserAbstract = () => {
	const { selectLiving } = useEventContext();
	console.log(selectLiving);
	return (
		<div className='border'>
			<div className='border text-right px-2'>Sala: {selectLiving.name}</div>
		</div>
	);
};

export default UserAbstract;
