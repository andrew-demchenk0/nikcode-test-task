export type Subcategory = {
	name: string;
	path?: string;
	subcategories?: Subcategory[];
};

export type Category = {
	name: string;
	icon: string;
	path?: string;
	subcategories?: Subcategory[];
};
