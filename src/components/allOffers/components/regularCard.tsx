import React from 'react';
import {Banners} from '../../../helper/bannersHelper.ts';
import {Icons} from '../../../helper/iconsHelper.ts';
import {NavLink} from 'react-router-dom';

const RegularCard: React.FC = () => {
	return (
		<NavLink to='#' className='flex flex-col max-w-96 bg-white rounded-lg shadow-md overflow-hidden'>
			<div className='relative'>
				<img
					className='h-44 w-full object-cover'
					src={Banners.Enchante}
					alt='Man looking at item at a store'
				/>
				<span className='absolute z-10 bg-white px-1 py-0.5 top-2 left-2 rounded-lg border-black'>TOP</span>
			</div>
			<div className='p-3.5 flex flex-col gap-3'>
				<div className='flex items-center justify-between'>
					<p className='mt-2 text-gray-500'>Financial</p>
					<span>rating</span>
				</div>
				<div className='flex flex-col'>
					<h3 className='font-bold'>Andrews Financial Planning</h3>
					<p className='mt-3'>Tax & Financial Associates Offers Affordable Tax Planning & Tax
						Preparation Services.</p>
				</div>
				<div className='flex items-center justify-between'>
					<span className='bg-gray-400 px-1 py-0.5 rounded-lg border-black'>investing</span>
					<button><img src={Icons.favourite} alt='favourite' /></button>
				</div>
			</div>
		</NavLink>
	);
};

export default RegularCard;
