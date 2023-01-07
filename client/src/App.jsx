import { UserProvider } from './context/UserProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import LivingPage from './pages/LivingPage';
import LoginMobile from './pages/LoginMobile';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';

export default function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Layout>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/event' element={<EventPage />} />
						<Route path='/salas' element={<LivingPage />} />
						<Route path='/trabajo' element={<JobPage />} />
						<Route path='/signin' element={<LoginMobile />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</Layout>
			</UserProvider>
		</BrowserRouter>
	);
}
