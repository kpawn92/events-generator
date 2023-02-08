const BgAnimated = () => {
	return (
		<>
			{/* Desktop */}
			<div className='h-40 hidden lg:block md:block'>
				<div className='min-h-screen flex justify-center items-center'>
					<div className='w-full relative'>
						<div className='hidden lg:block md:block'>
							<div className='bg-purple-300 opacity-70 mix-blend-multiply animate-blob absolute filter blur-xl inset-0 m-auto -left-36 h-72 w-72 rounded-full'></div>
							<div className='bg-yellow-300 opacity-70 mix-blend-multiply animation-delay-4000  animate-blob absolute filter blur-xl inset-0 m-auto -right-36 h-72 w-72 rounded-full'></div>
							<div className='bg-pink-300 opacity-70 mix-blend-multiply animation-delay-2000  animate-blob absolute filter blur-xl inset-0 m-auto -bottom-8 h-72 w-72 rounded-full'></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BgAnimated;
