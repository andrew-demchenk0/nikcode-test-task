import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Spinner from 'components/Spinner.tsx';

import {fetchOffers, selectOffers} from 'reduxSlice/offersSlice.ts';
import {NavLink} from 'react-router-dom';
import {Icons} from 'helpers/iconsHelper.ts';
import {Banners} from 'helpers/bannersHelper.ts';
import {Offer} from 'services/offer.types.ts';

const WideCard: React.FC = () => {
	const dispatch = useDispatch();
	const offers = useSelector(selectOffers) as Offer[];
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch(fetchOffers() as any)
			.then(() => setLoading(false))
			.catch(() => setLoading(false));
	}, [dispatch]);

	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			{offers.map((offer) => (
				<NavLink
					key={offer.id}
					to={`/${offer.path}`}
					className='flex w-full bg-white rounded-lg shadow-md overflow-hidden'>
					<div className='relative'>
						<img
							className='h-full w-full object-cover'
							src={Banners.Enchante}
							alt='Man looking at item at a store'
						/>
						<span className='absolute z-10 bg-white px-1 py-0.5 top-2 left-2 rounded-lg border-black'>
							TOP
						</span>
					</div>
					<div className='p-3.5 flex flex-col gap-3 w-full'>
						<div className='flex items-center justify-between'>
							<p className='mt-2 text-gray-500'>{offer.category.title}</p>
							<span>{offer.rating}</span>
						</div>
						<div className='flex flex-col'>
							<h3 className='font-bold'>{offer.title}</h3>
							<p className='mt-3'>{offer.description}</p>
						</div>
						<div className='flex items-center justify-between'>
							<span className='bg-gray-400 px-1 py-0.5 rounded-lg border-black'>
								investing
							</span>
							<button>
								<img src={Icons.favourite} alt='favourite' />
							</button>
						</div>
					</div>
				</NavLink>
			))}
		</>
	);
};

export default WideCard;
