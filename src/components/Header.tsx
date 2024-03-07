import React from 'react';
import {Icons} from '../helper/iconsHelper.ts';
import {NavLink} from 'react-router-dom';
import MainMenu from './menu/MainMenu.tsx';

const Header: React.FC = () => {
	return (
		<header className='fixed flex items-center w-full h-20 bg-sky-100 '>
			<div className='container mx-auto w-full h-12 flex items-center justify-between'>
				<div className='flex items-center gap-10'>
					<NavLink
						to='/'
						className='flex items-center justify-center h-11 flex-shrink-0'>
						<img src={Icons.logo} alt='Logo' />
					</NavLink>
					<MainMenu />
				</div>
				<div className='flex items-center gap-10'>
					<NavLink to='/favourite' className='flex items-center gap-2 p-2'>
						<img src={Icons.favourite} alt='favourite button-icon' /> Favourite
					</NavLink>
					<NavLink to='/log-in' className='p-2'>
						Log in
					</NavLink>
					<NavLink
						to='/sign-up'
						className=' bg-sky-950 text-white rounded-lg p-2'
						aria-label='Sign Up'
						role='button'
						type='button'>
						Sign Up
					</NavLink>
				</div>
			</div>
		</header>
	);
};

export default Header;
