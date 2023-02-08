import Navbar from '../container/Navbar';
import imagen from '../../assets/logo/imagen.png';
import Nav from '../contents/Nav';

const Header = () => {
	return (
		<header>
			<div className='hidden lg:block md:block'>
				<Navbar>
					<Nav link={'/'}>
						<img src={imagen} alt='Logotipo del sistema' />
					</Nav>
					<nav className='flex items-center gap-x-6'>
						<Nav link={'/event'}>Eventos</Nav>
						<Nav link={'/'}>Salas</Nav>
						<Nav link={'/'}>Panel de usuario</Nav>
					</nav>
				</Navbar>
			</div>
		</header>
	);
};

export default Header;
