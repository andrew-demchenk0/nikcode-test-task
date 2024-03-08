import React, {lazy} from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';

import {Icons} from 'helpers/iconsHelper.ts';
import HomeMenu from 'components/home/components/HomeMenu.tsx';
import {goToPreviousPage} from 'utils/goToPreviousPage.ts';

const Orders = lazy(() => import('components/home/components/Orders.tsx'));
const Profile = lazy(
	() => import('components/home/components/ProfileForm.tsx'),
);
const Favourite = lazy(
	() => import('components/home/components/Favourite.tsx'),
);
const Help = lazy(() => import('components/home/components/Help.tsx'));

const HomePage: React.FC = () => {

	return (
		<>
			<div className='mt-14 flex gap-4 items-center justify-start'>
				<button
					onClick={goToPreviousPage}
					className='inline-flex items-center justify-center gap-3 rounded-lg bg-sky-100 p-2 text-sm'>
					<img src={Icons.arrowBack} alt='Previous Page' className='h-2' />
					Previous Page
				</button>
				<div className='flex'>
					<NavLink to='/' className='text-sm'>
						Home
					</NavLink>
					<p className='text-sm font-bold ml-1'>• profile</p>
				</div>
			</div>
			<div className='flex gap-5'>
				<HomeMenu />
				<Routes>
					<Route path='orders' element={<Orders />} />
					<Route path='favourite' element={<Favourite />} />
					<Route path='help' element={<Help />} />
					<Route path='profile' element={<Profile />} />
				</Routes>
			</div>
		</>
	);
};

export default HomePage;
