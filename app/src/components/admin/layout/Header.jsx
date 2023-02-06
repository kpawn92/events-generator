const Header = ({ children, links, dataUser, setDivs, role }) => {
	const handleToggleDiv = e => {
		setDivs({ [e.target.id]: true });
	};
	return (
		<div className='flex max-w-[1200px] w-full mt-4 mx-auto bg-gray-900 p-8 px-8 rounded-lg justify-between'>
			{children}
			<div className='dark:text-white'>
				<ul className='flex'>
					{links.map(({ label, route }, i) => (
						<li key={i} className='hover:border rounded-md mt-2 ml-2 mr-2 px-2'>
							<a href='#' id={route} onClick={handleToggleDiv}>
								{label}
							</a>
						</li>
					))}
				</ul>
			</div>

			<h2 className='text-xl dark:text-white font-bold text-center ml-2 items-center'>
				{role}
				<p className='text-xs font-light'>{dataUser && dataUser.email}</p>
			</h2>
		</div>
	);
};

export default Header;
