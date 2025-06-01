'use client';
// import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { classNames } from '@/utils';
import style from './style.module.scss';
import Link from 'next/link';
import CloudflareImage from '@/components/CloudflareImage';

const sections = [
	{
		name: 'Whites',
		list: [
			{
				name: 'Crisp',
				description:
					'Fresh, pleasingly acidic, and thirst quenching, these wines are light in body with refreshing finishes making them great seafood or salad partners.',
				wines: [
					'Pinot Grigio',
					'Albarino',
					'Sauvignon Blanc',
					'Verdejo',
					'Vinho Verde',
				],
			},
			{
				name: 'Rich',
				description:
					'Creamy and full flavored, these wines feature a wide array of aromas, a dash of oak and rich buttery mouthfeel. Great wines with complex dinners like a traditional Turkey with trimmings.',
				wines: ['Chardonnay', 'Viognier', 'White Rioja'],
			},
			{
				name: 'Soft',
				description:
					'Floral, honeyed, and accented by pleasing acidity, these wines range from dry to slightly sweet. Great food wines with salty items like baked ham or spicy foods like Asian styles.',
				wines: [
					'Riesling',
					'Gewürztraminer',
					'Chenin Blanc',
					'Pinot Gris',
				],
			},
		],
	},
	{
		name: 'Reds',
		list: [
			{
				name: 'Juicy',
				description:
					'Ripe, luscious, and accessible, these wines are packed with bright fruit flavors. They are perfect for party wines and pair very well with cheeses and appetizers.',
				wines: [
					'Beaujolais',
					'Pinot Noir',
					'Valopicella',
					'Grenache',
					'Dolcetto',
				],
			},
			{
				name: 'Smooth',
				description:
					'Spicy, earthy and supple, these wines are nicely balanced with often herbal, smoky or vanilla essences to enhance the fruit. Pair these with rich poultry dishes, stews or roasts of red or pink meat.',
				wines: [
					'Merlot',
					'Pinot Noir',
					'Sangiovese',
					'Tempranillo',
					'Malbec',
				],
			},
			{
				name: 'Bold',
				description:
					'Intense, strong and fully satisfying, these wines have reputations for carrying powerful flavors. Words like tobacco, pencil shavings, currants, raisins and leather are often used. Match these with equally powerful dishes like herb encrusted Rib roast, barbeque fare, or an evening with a cigar.',
				wines: [
					'Syrah',
					'Zinfandel',
					'Nebbiolo',
					'Petite Sirah',
					'Mouvedre',
				],
			},
		],
	},
	{
		name: 'Sparking & Rose',
		list: [
			{
				name: 'Sparkling',
				description:
					'Fizzy, yeasty, and mouthwatering, sparkling wines come in a collection of styles. Great for special occasions or as a perfect start to any meal.',
				wines: ['Champagne', 'Cava', 'Prosecco'],
			},
			{
				name: 'Rose',
				description:
					'Brisk and bursting with flavors of strawberries, violets, and watermelon. Great for refreshment or pairing with fish dishes like broiled salmon.',
				wines: ['French Blended Rosé', 'Sparkling Rosé'],
			},
		],
	},
];

const images = [
	'/images/wine/wine-1.jpg',
	'/images/wine/wine-2.jpg',
	'/images/wine/wine-3.jpg',
	'/images/wine/wine-4.jpg',
];

export default function Wine() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [slideshowStarted, setSlideshowStarted] = useState(false);

	// Rotate background image
	useEffect(() => {
		const interval = setInterval(() => {
			setSlideshowStarted(true);
			setCurrentImageIndex((prev) =>
				prev === images.length - 1 ? 0 : prev + 1
			);
		}, 6 * 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="bg-[var(--gray-5)]">
			<div aria-hidden="true" className="relative">
				{images.map((image, index, arr) => {
					return (
						// <Image
						// 	key={index}
						// 	src={image}
						// 	alt=""
						// 	height={0}
						// 	width={0}
						// 	sizes="100vw"
						// 	className={classNames(
						// 		style.Image,
						// 		slideshowStarted
						// 			? index === currentImageIndex
						// 				? style.SlideIn
						// 				: index === currentImageIndex - 1 ||
						// 					(index === arr.length - 1 &&
						// 						currentImageIndex === 0)
						// 					? style.SlideOut
						// 					: 'hidden'
						// 			: index === currentImageIndex
						// 				? ''
						// 				: 'hidden'
						// 	)}
						// />
						<CloudflareImage
							key={index}
							src={image}
							alt=""
							// height={0}
							width={1280}
							// sizes="100vw"
							options={["q=75"]}
							className={classNames(
								style.Image,
								slideshowStarted
									? index === currentImageIndex
										? style.SlideIn
										: index === currentImageIndex - 1 ||
											(index === arr.length - 1 &&
												currentImageIndex === 0)
											? style.SlideOut
											: 'hidden'
									: index === currentImageIndex
										? ''
										: 'hidden'
							)}
						/>
					);
				})}
				<div className="absolute inset-0 bg-gradient-to-t from-black" />
			</div>

			<div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
				<div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Our Wines
					</h2>
					<p className="mt-4 text-white">
						With over 500 wines in stock, we offer a wide selection of
						wine from around the world.
						<br />
						We offer custom curated cases of wine based on personal
						taste and price range.
						<br />
						To inquire, call the store at <Link href="tel:2072893250" className='text-[var(--mint-9)] hover:text-[var(--mint-10)]'>(207) 289-3250</Link>, or email {" "}
						<Link href="mailto:foodstopwines@gmail.com" className='text-[var(--mint-9)] hover:text-[var(--mint-10)]'>foodstopwines@gmail.com</Link>.
						<br />
					</p>
				</div>

				<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
					{sections.map((section) => {
						return (
							<Fragment key={section.name}>
								<dt className="text-xl font-bold text-white w-full col-span-1 sm:col-span-2 lg:col-span-3 text-center">
									{section.name}
								</dt>

								{section.list.map((item) => {
									return (
										<div
											key={item.name}
											className="border-t border-gray-200 pt-4"
										>
											<dt className="font-medium text-lg text-white">
												{item.name}
											</dt>
											<dd className="mt-2 text-white">
												{item.description}
											</dd>
											<div className="flex flex-col grow">
												{item.wines.map((wine) => {
													return (
														<dd
															key={wine}
															className="mt-2 text-white"
														>
															• {wine}
														</dd>
													);
												})}
											</div>
										</div>
									);
								})}
							</Fragment>
						);
					})}
				</dl>
			</div>
		</div>
	);
}
