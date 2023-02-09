import { useUserContext } from '../../context/UserProvider';

const DateEvent = ({ date }) => {
	const { token } = useUserContext();
	return (
		<div className='w-full my-4'>
			<p className='py-1 flex justify-between text-base'>
				Inicio de inscripcion:
				<small className='text-base'>{date.eventHomeSubs}</small>
			</p>
			<p className='text-base py-1  flex justify-between'>
				Fin de la inscripcion:
				<small className='text-base'>{date.eventEndSubs}</small>
			</p>
			{token && (
				<>
					<p className='text-base py-1  flex justify-between'>
						Fecha inicio del evento:
						<small className='text-base'>{date.eventHome}</small>
					</p>
					<p className='text-base py-1  flex justify-between'>
						Fecha final del evento:
						<small className='text-base'>{date.eventEnd}</small>
					</p>
				</>
			)}
		</div>
	);
};

export default DateEvent;
