const Presentation = () => {
	return (
		<>
			<div>
				<h2 className='text-4xl lg:text-6xl font-semibold lg:font-bold  text-gray-500 tracking-tighter'>
					Inscripci&oacute;n {new Date().getFullYear()}
				</h2>
				<p className='mt-4 lg:mt-5 text-xl font-medium text-gray-500 w-full lg:w-1/2'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
					optio saepe voluptates hic tempore lo assumenda aspernatur nostrum,
					quaerat, dignissimos ipsam dolores fugit at culpt natus. Explicabo, ea
					molestiae!
				</p>
				<button className='font-semibold mt-5 px-5 py-1  bg-yellow-400 text-white rounded-3xl hover:bg-yellow-500 hover:shadow-lg transition-shadow'>
					Empezar...
				</button>
			</div>
		</>
	);
};

export default Presentation;
