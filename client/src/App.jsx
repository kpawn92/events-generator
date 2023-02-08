import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import Layout from './components/layout/Body';
import EventPage from './pages/Event.page';
import HomePage from './pages/Home.page';

export default function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Layout>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/event' element={<EventPage />} />
					</Routes>
				</Layout>
			</UserProvider>
		</BrowserRouter>
	);
}
