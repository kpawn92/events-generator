import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Body';

export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route
						path='/'
						element={<div className='text-4xl'>Hello Nuevamente</div>}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}
