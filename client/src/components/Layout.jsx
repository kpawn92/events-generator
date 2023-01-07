import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

export const Layout = ({ children }) => {
	return (
		<div className='container mx-auto'>
			<Header />
			{children}
			<Footer />
		</div>
	);
};
