import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
	return (
		<div className='container mx-auto'>
			<Header />
			{children}
			<Footer />
		</div>
	);
};
