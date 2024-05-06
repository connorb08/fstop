import { classNames } from '@/utils';
import style from './style.module.scss';
import menu from '@/data/menu';
import { Box, Card, Inset, Text, Strong, Separator } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { imageResize, imageResizeDomain } from '@/utils/links';

const tabs = [
	{ name: 'Sides', href: '#sides', },
	{ name: 'Salads', href: '#salads', },
	{ name: 'Burgers', href: '#burgers', },
	{ name: 'Panini & Grill', href: '#grill', },
	{ name: 'Wraps & Subs', href: '#subs', },
	{ name: 'Pizza', href: '#pizza', },
]

function TabNav() {

	return (
		<div className='flex-1 flex justify-center mb-10'>
			<div className="flex sm:w-full lg:w-3/4 xl:w-1/2">
				<nav className="flex-1 isolate grid grid-cols-3 sm:grid-cols-6 divide-x divide-y rounded-lg shadow divide-[var(--gray-4)]" aria-label="Tabs">
					{tabs.map((tab, tabIdx) => (
						<Link
							key={tab.name}
							href={tab.href}
							className={classNames(
								'text-white',
								tabIdx === 0 ? 'rounded-tl-lg sm:rounded-l-lg border-l border-t border-[var(--gray-4)]' : '',
								tabIdx === 2 ? 'rounded-tr-lg sm:rounded-none' : '',
								tabIdx === 3 ? "rounded-bl-lg sm:rounded-none" : "",
								tabIdx === tabs.length - 1 ? 'rounded-br-lg sm:rounded-r-lg' : '',
								'group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium bg-[var(--gray-8)] hover:bg-[var(--gray-10)] focus:z-10'
							)}
						>
							<span>{tab.name}</span>
						</Link>
					))}
				</nav>
			</div>
		</div>
	)
}

export default function Menu() {
	return (
		<div className="flex flex-col items-center mt-10">
			<Box maxWidth="1024px" className="flex mx-5">
				<Card size="2">
					<Inset clip="padding-box" side="top" pb="current">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={`${imageResizeDomain}/format=auto,quality=75,w=1200,h=900/specials`}
							alt="Menu"
							width={800}
							height={600}
						/>
					</Inset>
					<Text as="p" size="3">
						<Strong>
							Our Weekly Specials — Updated every Tuesday
						</Strong>
					</Text>
				</Card>
			</Box>

			<div className='w-full flex mt-10'>
				<TabNav />
			</div>


			<div className={style.MenuRow}>
				<div className={style.MenuSection} id="sides">
					<h1 className={style.MenuHeader}>Sides</h1>
					<Separator className={style.SectionSeparator} />
					<ul>
						{menu.sides.map((side, index) => (
							<li key={index}>
								<div className={style.Item}>
									<div className="flex justify-between">
										<span className={style.ItemName}>
											{side.name}
										</span>
										<span className={style.Price}>
											${side.price}
										</span>
									</div>
									<p className={style.Description}>
										{side.description}
									</p>
								</div>
								<Separator
									my="3"
									size="4"
									className={style.Separator}
								/>
							</li>
						))}
					</ul>
				</div>
				<div className={style.MenuSection}>
					<h1 className={style.MenuHeader} id="salads">Salads</h1>
					<Separator className={style.SectionSeparator} />
					<ul>
						{menu.salads.map((salad, index) => (
							<li key={index}>
								<div className={style.Item}>
									<div className="flex justify-between">
										<span className={style.ItemName}>
											{salad.name}
										</span>
										<span className={style.Price}>
											${salad.price}
										</span>
									</div>
									<p className={style.Description}>
										{salad.description}
									</p>
								</div>
								<Separator
									my="3"
									size="4"
									className={style.Separator}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Burgers */}
			<div className={style.MenuRow}>
				<div className={style.MenuSection} id="burgers">
					<h1 className={style.MenuHeader}>Burgers</h1>
					<Separator className={style.SectionSeparator} />
					<ul>
						{menu.burgers.map((burger, index) => (
							<li key={index}>
								<div className={style.Item}>
									<div className="flex justify-between">
										<span className={style.ItemName}>
											{burger.name}
										</span>
										<span className={style.Price}>
											${burger.price}
										</span>
									</div>
									<p className={style.Description}>
										{burger.description}
									</p>
								</div>
								<Separator
									my="3"
									size="4"
									className={style.Separator}
								/>
							</li>
						))}
					</ul>
				</div>

				<div className={style.MenuImageContainer}>
					<div className="flex justify-center">
						<Card size="2" className={style.ImageCard}>
							<Inset clip="padding-box" side="top" pb="current">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									className="aspect-[3/2] w-full bg-gray-50 object-cover xl:inset-0 xl:aspect-auto xl:h-full"
									src={imageResize(`/images/P1250505.jpg`, ['width=1200', 'height=600', 'format=auto', 'quality=75'])}
									width={800}
									height={400}
									alt="cheeseburger deluxe"
								/>
							</Inset>
							<Text as="p" size="3">
								Cheeseburger Deluxe
							</Text>
						</Card>
					</div>
				</div>

			</div>

			{/* Wraps & Panini images */}
			<div className={style.MenuRow}>
				<div className={style.MenuImageContainer}>
					<div className="flex justify-center">
						<Card size="2" className={style.ImageCard}>
							<Inset clip="padding-box" side="top" pb="current">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									className="aspect-[3/2] w-full bg-gray-50 object-cover xl:inset-0 xl:aspect-auto xl:h-full"
									src={imageResize(`/images/P1250491.jpg`, ['width=1200', 'height=600', 'format=auto', 'quality=75'])}
									width={800}
									height={400}
									alt=""
								/>
							</Inset>
							<Text as="p" size="3">
								House Panini
							</Text>
						</Card>
					</div>
				</div>

				<div className={style.MenuImageContainer}>
					<div className="flex justify-center">
						<Card size="2" className={style.ImageCard}>
							<Inset clip="padding-box" side="top" pb="current">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									className="aspect-[3/2] w-full bg-gray-50 object-cover xl:inset-0 xl:aspect-auto xl:h-full"
									// src={`/images/P1250471.jpg`}
									src={imageResize(`/images/P1250471.jpg`, ['width=800', 'height=400', 'format=auto', 'quality=75'])}
									width={800}
									height={400}
									alt=""
								/>
							</Inset>
							<Text as="p" size="3">
								Spicy Thai Wrap
							</Text>
						</Card>
					</div>
				</div>
			</div>

			{/* Panini & Grill */}
			<div className={style.MenuSectionGrid}>
				<h1 className={style.MenuHeader} id="grill">Panini & Grill</h1>
				<Separator className={style.SectionSeparator} />
				<ul>
					{menu.grill_items.map((item, index) => (
						<li key={index} className={style.GridCell}>
							<div className={style.Item}>
								<div className="flex justify-between">
									<span className={style.ItemName}>
										{item.name}
									</span>
									<span className={style.Price}>
										{(typeof item.price === "number") ? `$${item.price}` :
											`$${item.price[0]} | $${item.price[1]}`}
									</span>
								</div>
								<p className={style.Description}>
									{item.description}
								</p>
							</div>
							<Separator
								my="3"
								size="4"
								className={style.Separator}
							/>
						</li>
					))}
				</ul>
			</div>

			<div className={style.MenuSectionGrid} id="subs">
				<h1 className={style.MenuHeader}>Wraps & Subs</h1>
				<Separator className={style.SectionSeparator} />
				<ul>
					{menu.wraps_and_subs.map((item, index) => (
						<li key={index} className={style.GridCell}>
							<div className={style.Item}>
								<div className="flex justify-between">
									<span className={style.ItemName}>
										{item.name}
									</span>
									<span className={style.Price}>
										{(typeof item.price === "number") ? `$${item.price}` :
											`$${item.price[0]} | $${item.price[1]}`}
									</span>
								</div>
								<p className={style.Description}>
									{item.description}
								</p>
							</div>
							<Separator
								my="3"
								size="4"
								className={style.Separator}
							/>
						</li>
					))}
				</ul>
			</div>

			{/* Pizza Images */}
			<div className={style.MenuRow}>
				<div className={style.MenuImageContainer}>
					<div className="flex justify-center">
						<Card size="2" className={style.ImageCard}>
							<Inset clip="padding-box" side="top" pb="current">
								<Image
									className="aspect-[3/2] w-full bg-gray-50 object-cover xl:inset-0 xl:aspect-auto xl:h-full"
									src={`/images/P1250491.jpg`}
									width={800}
									height={400}
									alt=""
								/>
							</Inset>
							<Text as="p" size="3">
								House Panini
							</Text>
						</Card>
					</div>
				</div>

				<div className={style.MenuImageContainer}>
					<div className="flex justify-center">
						<Card size="2" className={style.ImageCard}>
							<Inset clip="padding-box" side="top" pb="current">
								<Image
									className="aspect-[3/2] w-full bg-gray-50 object-cover xl:inset-0 xl:aspect-auto xl:h-full"
									src={`/background/pizza.jpg`}
									width={800}
									height={400}
									alt=""
								/>
							</Inset>
							<Text as="p" size="3">
								Chicken Florentine
							</Text>
						</Card>
					</div>
				</div>
			</div>

			{/* Signature Pies */}
			<div className={style.MenuSectionGrid} id="pizza">
				<h1 className={style.MenuHeader}>Signature Pies</h1>
				<Separator className={style.SectionSeparator} />
				<ul>
					{menu.pizzas.pies.map((pizza, index) => (
						<li key={index} className={style.GridCell}>
							<div className={style.Item}>
								<div className="flex justify-between">
									<span className={style.ItemName}>
										{pizza.name}
									</span>
									<span className={style.Price}>
										${pizza.price[0]} | $
										{pizza.price[1]}
									</span>
								</div>
								<p className={style.Description}>
									{pizza.description}
								</p>
							</div>
							<Separator
								my="3"
								size="4"
								className={style.Separator}
							/>
						</li>
					))}
				</ul>
			</div>

			{/* Pizza Your Way */}
			<div className={style.MenuSectionGrid}>
				<h1 className={style.MenuHeader}>Pizza Your Way</h1>
				<Separator className={style.SectionSeparator} />
				<ul>
					{menu.pizzas.modifications.map((item, index) => (
						<li key={index} className={style.GridCell}>
							<div className={style.Item}>
								<div className="flex justify-between">
									<span className={style.ItemName}>
										{item.name}
									</span>
									<span className={style.Price}>
										{(typeof item.price === "number") ? `$${item.price}` :
											`$${item.price[0]} | $${item.price[1]}`}
									</span>
								</div>
								<p className={style.Description}>
									{item.list.map((mod, index) => (`${mod}${index < item.list.length - 1 ? ', ' : ''}`))}
								</p>
								<p className={style.Description}>
									{item.description}
								</p>
							</div>
							<Separator
								my="3"
								size="4"
								className={style.Separator}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
