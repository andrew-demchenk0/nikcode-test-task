import React from 'react';
import {Link} from 'react-router-dom';
import {banners} from './banners.ts';
import {Banner} from './bunners.types.ts';

const AdvertisingBanners: React.FC = () => {
	return (
		<div className='flex items-center gap-2 justify-between mt-14'>
			{banners.map((banner: Banner, index: number) => (
				<Link to={banner.link} key={index}>
					<img className='w-full' src={banner.image} alt={banner.name} />
				</Link>
			))}
		</div>
	);
};

export default AdvertisingBanners;
