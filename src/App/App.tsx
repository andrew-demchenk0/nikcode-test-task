import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import MainPage from '../pages/MainPage.tsx';

const App: React.FC = () => {
	return (
		<Router>
			<div className='app flex flex-col min-h-screen'>
				<Header />
				<main className=' mt-20 flex-grow overflow-auto'>
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route path='/' element={<MainPage />} />
						</Routes>
					</Suspense>
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
