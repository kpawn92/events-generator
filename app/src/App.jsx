import { UserProvider } from './context/UserProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/Admin/AdminPage';
import LoginPage from './pages/Admin/Login';
import { ProtectedRoute } from './components/admin/ProtectedRoute';

export default function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route
						path='/admin'
						element={
							<ProtectedRoute>
								<AdminPage />
							</ProtectedRoute>
						}
					/>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
}
