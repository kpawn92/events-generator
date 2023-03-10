import { UserProvider } from './context/UserProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/Admin/Login';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import AdminPage from './pages/Admin/AdminPage';
import ModeratorPage from './pages/Admin/ModeratorPage';
import EconomistPage from './pages/Admin/EconomistPage';
import ManagerPage from './pages/Admin/ManagerPage';

export default function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route element={<ProtectedRoute />}>
						<Route path='/admin' element={<AdminPage />} />
						<Route path='/moderator' element={<ModeratorPage />} />
						<Route path='/economist' element={<EconomistPage />} />
						<Route path='/manager' element={<ManagerPage />} />
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
}
