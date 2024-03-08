import React from 'react';
import {NavLink} from 'react-router-dom';

import {Icons} from 'helpers/iconsHelper.ts';
import HelenPhoto from 'assets/helenPhoto.jpeg';

const HomeMenu: React.FC = () => {
	return (
		<div className='flex flex-col w-1/3'>
			<div className='flex items-center gap-10 p-5 my-5'>
				<div className='min-w-32'>
					<img className='rounded-full w-full' src={HelenPhoto} alt='Profile photo' />
				</div>
				<div className='flex flex-col w-full'>
					<div className='font-bold text-xl mb-4 w-full'>Helen Wilson</div>
					<p className='mb-2'>
						<span>82 </span>Reviews
					</p>
					<div>rating</div>
				</div>
			</div>
			<div>
				<NavLink
					to='orders'
					style={({isActive}) => ({
						background: isActive ? '#e0f2fe' : 'inherit',
					})}
					className='flex gap-2 w-full rounded-lg p-2'>
					<img src={Icons.orders} alt='Orders icon' />
					Orders
				</NavLink>
				<NavLink
					to='favourite'
					style={({isActive}) => ({
						background: isActive ? '#e0f2fe' : 'inherit',
					})}
					className='flex gap-2 w-full rounded-lg p-2'>
					<img src={Icons.favourite} alt='Favourite icon' />
					Favourite
				</NavLink>
				<NavLink
					to='help'
					style={({isActive}) => ({
						background: isActive ? '#e0f2fe' : 'inherit',
					})}
					className='flex gap-2 w-full rounded-lg p-2'>
					<img src={Icons.support} alt='Help icon' />
					Help
				</NavLink>
				<NavLink
					to='profile'
					style={({isActive}) => ({
						background: isActive ? '#e0f2fe' : 'inherit',
					})}
					className='flex gap-2 w-full rounded-lg p-2'>
					<img src={Icons.settings} alt='Profile icon' />
					Profile
				</NavLink>
			</div>
		</div>
	);
};

export default HomeMenu;
