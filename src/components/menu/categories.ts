import {MenuIcons} from 'helpers/menuIconHelper.ts';
import {Category} from './categories.types.ts';

export const categories: Category[] = [
	{
		name: 'Services',
		icon: MenuIcons.services,
		path: '/services',
		subcategories: [
			{
				name: 'Accounting & Finance',
				path: '/accounting&finance',
				subcategories: [],
			},
			{
				name: 'Admin / Office',
				subcategories: [
					{name: 'Admin', path: '/services/admin'},
					{name: 'Office', path: '/services/office'},
				],
			},
			{
				name: 'Arch / Engineering',
				subcategories: [
					{name: 'Arch', path: '/services/arch'},
					{name: 'Engineering', path: '/services/engineering'},
				],
			},
			{
				name: 'Art / Media / Design',
				subcategories: [
					{name: 'Art', path: '/services/art'},
					{name: 'Media', path: '/services/media'},
					{name: 'Design', path: '/services/design'},
				],
			},
			{
				name: 'Biotech / Science',
				subcategories: [
					{name: 'Biotech', path: '/services/biotech'},
					{name: 'Science', path: '/services/science'},
				],
			},
		],
	},
	{
		name: 'Real Estate',
		icon: MenuIcons.home,
		path: '/real-estate',
		subcategories: [
			{
				name: 'Real Estate subcategory 1',
				path: '/real-estate/subcategory-1',
				subcategories: [],
			},
			{
				name: 'Real Estate subcategory 2',
				path: '/real-estate/subcategory-2',
				subcategories: [],
			},
		],
	},
	{
		name: 'For Rent',
		icon: MenuIcons.home,
		path: '/for-rent',
		subcategories: [
			{
				name: 'For Rent subcategory 1',
				path: '/for-rent/subcategory-1',
				subcategories: [],
			},
			{
				name: 'For Rent subcategory 2',
				path: '/for-rent/subcategory-2',
				subcategories: [],
			},
		],
	},
	{
		name: 'Items For Sale',
		icon: MenuIcons.sale,
		path: '/items-for-sale',
		subcategories: [
			{
				name: 'Items For Sale subcategory 1',
				path: '/items-for-sale/subcategory-1',
				subcategories: [],
			},
			{
				name: 'Items For Sale subcategory 2',
				path: '/items-for-sale/subcategory-2',
				subcategories: [],
			},
		],
	},
	{
		name: 'Jobs',
		icon: MenuIcons.jobs,
		path: '/jobs',
		subcategories: [
			{
				name: 'Jobs subcategory 1',
				path: '/jobs/subcategory-1',
				subcategories: [],
			},
			{
				name: 'Jobs subcategory 2',
				path: '/jobs/subcategory-2',
				subcategories: [],
			},
		],
	},
];
