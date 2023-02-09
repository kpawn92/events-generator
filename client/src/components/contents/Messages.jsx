export const Alert = ({ msg }) => {
	return (
		<div
			className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-5'
			role='alert'
		>
			<p className='font-bold'>Alert!!!</p>
			<p>{msg}</p>
		</div>
	);
};

export const Warning = ({ msg }) => {
	return (
		<div
			className='bg-yellow-100 border-l-4 border-yellow-500 text-orange-700 p-4 mt-5'
			role='alert'
		>
			<p className='font-bold'>Advertencia</p>
			<p>{msg}</p>
		</div>
	);
};

export const Success = ({ msg }) => {
	return (
		<div
			className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-5'
			role='alert'
		>
			<p className='font-bold'>Aceptado</p>
			<p>{msg}</p>
		</div>
	);
};
