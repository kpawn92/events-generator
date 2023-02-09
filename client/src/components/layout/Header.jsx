import Navbar from '../container/Navbar';
import imagen from '../../assets/logo/imagen.png';
import Nav from '../contents/Nav';
import Auth from '../container/Auth';
import { useUserContext } from '../../context/UserProvider';

const Header = () => {
	const { token } = useUserContext();
	return (
		<header>
			<div className='hidden lg:block md:block'>
				<Navbar>
					<Nav link={'/'}>
						<img src={imagen} alt='Logotipo del sistema' />
					</Nav>
					<nav className='flex items-center gap-x-6'>
						<Nav link={'/event'}>Eventos</Nav>
						{token && <Nav link={'/'}>Salas</Nav>}
						<Nav link={'/dash'}>Panel de usuario</Nav>
						<Nav link={'/'}>Contact</Nav>
					</nav>
					<Auth />
				</Navbar>
			</div>
		</header>
	);
};

export default Header;
