import React, { useState } from 'react';

import RegularCard from './components/regularCard.tsx';
import WideCard from './components/wideCard.tsx';

const AllOffers: React.FC = () => {
	const [isRowView, setIsRowView] = useState(true);

	const toggleView = () => {
		setIsRowView((prev) => !prev);
	};

	return (
		<>
			<div className='flex items-center justify-between mt-5'>
				<h2 className='font-bold text-2xl'>All Offers</h2>
				<button
					className='rounded-lg bg-sky-950 text-white p-2'
					onClick={toggleView}>
					{isRowView ? 'Column' : 'Row'}
				</button>
			</div>
			<div className='flex flex-wrap gap-3 mt-14 justify-between'>
				{isRowView ? <RegularCard /> : <WideCard />}
			</div>
		</>
	);
};

export default AllOffers;
