import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import Layout from './components/layout/Body';
import EventPage from './pages/Event.page';
import HomePage from './pages/Home.page';
import Register from './pages/Register.page';
import Login from './pages/Login';
import Dash from './pages/Dash';
import Living from './pages/Living.page';
import NotFoundPage from './pages/NotFoundPage';
export default function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Layout>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/event' element={<EventPage />} />
						<Route path='/signup' element={<Register />} />
						<Route path='/signin' element={<Login />} />
						<Route path='/dash' element={<Dash />} />
						<Route path='/living' element={<Living />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</Layout>
			</UserProvider>
		</BrowserRouter>
	);
}
