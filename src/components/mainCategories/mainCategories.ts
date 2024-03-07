import {CategoriesIcons} from '../../helper/categoriesIconHelper.ts';
import {MainCategory} from './types/mainCategories.types.ts';

export const mainCategories: MainCategory[] = [
	{
		name: 'Services',
		icon: CategoriesIcons.services,
		path: '/services',
	},
	{
		name: 'Real Estate',
		icon: CategoriesIcons.home,
		path: '/real-estate',
	},
	{
		name: 'For Rent',
		icon: CategoriesIcons.key,
		path: '/for-rent',
	},
	{
		name: 'Items For Sale',
		icon: CategoriesIcons.sale,
		path: '/items-for-sale',
	},
	{
		name: 'Restaurants',
		icon: CategoriesIcons.restaurants,
		path: '/restaurants',
	},
	{
		name: 'Jobs',
		icon: CategoriesIcons.jobs,
		path: '/jobs',
	},
	{
		name: 'Events',
		icon: CategoriesIcons.events,
		path: '/events',
	},
];
