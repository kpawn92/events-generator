const UserPayment = () => {
	const handleSubmit = e => {
		e.preventDefault();
		console.log(e.target);
	};
	return (
		<form onSubmit={handleSubmit}>
			<di className='flex flex-col text-left'>
				<label htmlFor='transaction'>N&uacute;mero de transacci&oacute;n</label>
				<input
					type='text'
					name='transaction'
					id='transaction'
					className='border mt-2 py-2 px-3 rounded-md w-full'
				/>
			</di>
			<button className='border mt-2 py-2 px-3 rounded-md w-full'>
				Enviar
			</button>
		</form>
	);
};

export default UserPayment;
