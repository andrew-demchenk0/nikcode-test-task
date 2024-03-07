import React, {useState} from 'react';
import {categories} from './categories.ts';
import {Category, Subcategory} from './types/categories.types.ts';

import {Icons} from '../../helper/iconsHelper.ts';
import {MenuIcons} from '../../helper/menuIconHelper.ts';
import {NavLink} from 'react-router-dom';

const MainMenu: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
		null,
	);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className='flex gap-2 p-2 border border-black rounded-lg hover: cursor-pointer'>
				<img src={MenuIcons.menu} alt='Menu icon' />
				All Categories
			</button>
			{isMenuOpen && (
				<div className='absolute top-full left-0 w-full h-48 bg-white items-start justify-start flex-col px-4 py-2'>
					<div className='flex-col w-80 relative'>
						{categories.map((category: Category, index: number) => (
							<div
								key={index}
								onMouseEnter={() => setActiveCategory(category.name)}
								onMouseLeave={() => setActiveCategory(null)}>
								<NavLink
									to={category.path || ''}
									className='px-4 py-2 text-sm text-gray-700 hover:bg-sky-100 hover:text-gray-900 flex items-center justify-between'
									role='menuitem'>
									<div className='flex items-center'>
										{category.icon && (
											<img
												src={category.icon}
												alt=''
												className='w-4 h-4 inline-block mr-2'
											/>
										)}
										{category.name}
									</div>
									<img
										src={Icons.arrow}
										className='flex items-center ml-2'
										alt='menu-icon-arrow'
									/>
								</NavLink>
								{activeCategory === category.name && (
									<div className='absolute left-full top-0 w-80 h-full'>
										<div
											className='py-1'
											role='menu'
											aria-orientation='vertical'
											aria-labelledby='options-menu'>
											{(category.subcategories || []).map(
												(subcategory: Subcategory, subIndex: number) => (
													<div
														key={subIndex}
														onMouseEnter={() =>
															setActiveSubcategory(subcategory.name)
														}
														onMouseLeave={() => setActiveSubcategory(null)}>
														<NavLink
															to={subcategory.path || ''}
															className='px-4 py-2 text-sm text-gray-700 hover:bg-sky-100 hover:text-gray-900 flex items-center justify-between'
															role='menuitem'>
															<div className='flex items-center'>
																{subcategory.name}
															</div>
															<img
																src={Icons.arrow}
																className='flex items-center ml-2'
																alt='menu-icon-arrow'
															/>
														</NavLink>
														{activeSubcategory === subcategory.name &&
															(subcategory.subcategories || []).length > 0 && (
																<div className='absolute left-full top-0 w-80 h-full'>
																	<div
																		className='py-1'
																		role='menu'
																		aria-orientation='vertical'
																		aria-labelledby='options-menu'>
																		{(subcategory.subcategories || []).map(
																			(
																				subSubcategory: Subcategory,
																				subSubIndex: number,
																			) => (
																				<NavLink
																					key={subSubIndex}
																					to={subSubcategory.path || ''}
																					className='block px-4 py-2 text-sm text-gray-700 hover:bg-sky-100 hover:text-gray-900'
																					role='menuitem'>
																					{subSubcategory.name}
																				</NavLink>
																			),
																		)}
																	</div>
																</div>
															)}
													</div>
												),
											)}
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default MainMenu;
