import React from 'react';
import RegularCard from './components/regularCard.tsx';
import WideCard from './components/wideCard.tsx';

const AllOffers: React.FC = () => {
	return (
		<>
			<div className='flex items-center justify-between mt-5'>
				<h2 className='font-bold text-2xl'>All Offers</h2>
				<button className='rounded-lg bg-sky-950 text-white p-2'>
					Row/Column
				</button>
			</div>
			<RegularCard />
			<WideCard />
		</>
	);
};

export default AllOffers;
