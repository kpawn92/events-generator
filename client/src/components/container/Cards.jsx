const Cards = ({ items }) => {
	console.log(items);
	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 max-w-5xl mx-auto gap-8 group'>
			<div className='bg-emerald-400/10 duration-500  group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  cursor-pointer p-8 rounded-xl mix-blend-luminosity'>
				<h4 className='uppercase text-xl font-bold'>Nombre del evento</h4>
				<p className='text-sm leading-7 my-3 font-light opacity-50'>
					Description
				</p>
				<button className='bg-black text-white duration-300 hover:bg-blue-400 py-2.5 px-8 font-bold rounded-full'>
					Saber m&aacute;s
				</button>
			</div>
		</div>
	);
};

export default Cards;
