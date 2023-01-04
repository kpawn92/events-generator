import { Layout } from './components/Layout';
// import { Presentation } from './components/Presentation';
// import { contact } from './config/contact';
import { Cards } from './components/Cards';
// import BgAnimated from './components/BgAnimated';

export default function App() {
	return (
		<>
			<Layout>
				{/* <BgAnimated /> */}
				<Cards title='Eventos' />
				{/* <Presentation contact={contact} /> */}
			</Layout>
		</>
	);
}
