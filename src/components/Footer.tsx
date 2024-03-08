import React from 'react';
import {Icons} from '../helpers/iconsHelper.ts';
import {Link, NavLink} from 'react-router-dom';

const Footer: React.FC = () => {
	return (
		<footer className='flex flex-wrap items-center w-full h-32 bg-sky-100 mt-14'>
			<div className='container mx-auto w-full flex items-center justify-between gap-5'>
				<NavLink
					to='/'
					className='flex items-center justify-center h-11 flex-shrink-0'>
					<img src={Icons.logo} alt='Logo' />
				</NavLink>
				<div className='flex flex-wrap items-center justify-center gap-2'>
					<Link to='mailto:support@Dealyoop.com'>support@Dealyoop.com</Link>
					<Link to='tel:+14255053804'>(425)505-3804</Link>
				</div>
				<div className='flex flex-wrap items-center justify-center gap-2'>
					<NavLink to='/privacy-policy'>Privacy Policy</NavLink>
					<NavLink to='/contract-offer'>Contract-offer</NavLink>
					<NavLink to='/faq'>FAQ</NavLink>
					<NavLink to='/payments'>Payments</NavLink>
					<NavLink to='/help'>Help</NavLink>
					<NavLink to='/feedback'>Feedback</NavLink>
					<NavLink to='/safety-rules'>Safety rules</NavLink>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
