import React from 'react';
import {mainCategories} from './mainCategories.ts';
import {MainCategory} from './mainCategories.types.ts';
import {NavLink} from 'react-router-dom';

const MainCategories: React.FC = () => {
	return (
		<>
			<h2 className='flex items-center justify-center text-2xl mt-14'>
				Main Categories
			</h2>
			<div className='flex flex-wrap gap-2 items-center justify-between mt-7'>
				{mainCategories.map((mainCategory: MainCategory, index: number) => (
					<NavLink
						key={index}
						to={mainCategory.path}
						className='flex-col items-center justify-center'>
						<div className='rounded-full flex items-center justify-center bg-gray-300 w-28 h-28'>
							<img src={mainCategory.icon} alt={mainCategory.name} />
						</div>
						<div className='flex items-center justify-center mt-2'>
							{mainCategory.name}
						</div>
					</NavLink>
				))}
			</div>
		</>
	);
};

export default MainCategories;
