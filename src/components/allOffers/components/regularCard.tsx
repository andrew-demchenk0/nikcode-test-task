import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {fetchOffers, selectOffers} from '../../../redux/offersSlice.ts';
import {Icons} from '../../../helper/iconsHelper.ts';
import {Banners} from '../../../helper/bannersHelper.ts';
import {Offer} from '../../../services/types/offer.types.ts';

const RegularCard: React.FC = () => {
	const dispatch = useDispatch();
	const offers = useSelector(selectOffers) as Offer[];
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch(fetchOffers())
			.then(() => setLoading(false))
			.catch(() => setLoading(false));
	}, [dispatch]);

	if (loading) {
		return (
			<div role='status' className='flex items-center justify-center'>
				<svg
					aria-hidden='true'
					className='w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
					viewBox='0 0 100 101'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
						fill='currentColor'
					/>
					<path
						d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
						fill='currentFill'
					/>
				</svg>
			</div>
		);
	}

	return (
		<>
			{offers.map((offer) => (
				<NavLink
					key={offer.id}
					to={`/${offer.path}`}
					className='flex flex-col w-80 bg-white rounded-lg shadow-md overflow-hidden'>
					<div className='relative'>
						<img
							className='h-auto w-full object-cover'
							src={Banners.Enchante}
							alt='Man looking at item at a store'
						/>
						<span className='absolute z-10 bg-white px-1 py-0.5 top-2 left-2 rounded-lg border-black'>
							TOP
						</span>
					</div>
					<div className='p-3.5 flex flex-col gap-3'>
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

export default RegularCard;
