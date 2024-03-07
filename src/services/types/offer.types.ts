export interface Category {
	id: number;
	slug: string;
	href: string;
	path: string;
	is_maincategory: boolean;
	is_secondarycategory: boolean;
	title: string;
	title_en: string;
}

export interface Offer {
	id: number;
	slug: string;
	title: string;
	category: Category;
	description: string | null;
	path: string;
	rating: number;
	tags: string[];
}
