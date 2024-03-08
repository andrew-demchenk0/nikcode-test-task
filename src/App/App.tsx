import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import MainPage from '../pages/MainPage.tsx';
import Spinner from '../components/Spinner.tsx';

const HomePage = lazy(() => import('../pages/HomePage.tsx'));

const App: React.FC = () => {
	return (
		<Router>
			<div className='app flex flex-col min-h-screen'>
				<Header />
				<main className='container mx-auto mt-20 flex-grow overflow-auto'>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path='/' element={<MainPage />} />
							<Route path='/home/*' element={<HomePage />} />
						</Routes>
					</Suspense>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
