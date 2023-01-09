export const Alert = ({ title, msg }) => {
	return (
		<div
			className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-5'
			role='alert'
		>
			<p className='font-bold'>{title}</p>
			<p>{msg}</p>
		</div>
	);
};

export const Warning = ({ title, msg }) => {
	return (
		<div
			className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-5'
			role='alert'
		>
			<p className='font-bold'>{title}</p>
			<p>{msg}</p>
		</div>
	);
};

export const Success = ({ title, msg }) => {
	return (
		<div
			className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-5'
			role='alert'
		>
			<p className='font-bold'>{title}</p>
			<p>{msg}</p>
		</div>
	);
};
