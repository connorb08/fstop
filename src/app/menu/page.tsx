import style from './style.module.scss';
import menu from '@/data/menu';
import { Box, Card, Inset, Text, Strong, Separator } from '@radix-ui/themes';
import Image from 'next/image';

export default function Menu() {
	return (
		<div className="flex flex-col items-center mt-10">
			<Box maxWidth="1024px" className="flex">
				<Card size="2">
					<Inset clip="padding-box" side="top" pb="current">
						<Image
							src="https://cumberland-foodstop.com/cdn-cgi/image/format=auto/https://bucket.cumberland-foodstop.com/specials.jpeg"
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

			<div className="flex flex-col lg:flex-row mt-10 mb-10 w-full">
				<div className="flex flex-col items-center w-full p-5">
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
				<div className="w-full">
					<div className="flex flex-col items-center justify-center w-full p-5">
						<h1 className={style.MenuHeader}>Salads</h1>
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
			</div>

			{/* Burgers & Wraps images */}
			<div className="flex flex-col lg:flex-row items-center gap-5  mb-10">
				<div className="w-full">
					<div className="flex justify-center">
						<Card size="2" className="w-3/4">
							<Inset clip="padding-box" side="top" pb="current">
								<Image
									className="aspect-[3/2] w-full bg-gray-50 object-cover xl:inset-0 xl:aspect-auto xl:h-full"
									src="/images/P1250505.jpg"
									width={800}
									height={400}
									alt=""
								/>
							</Inset>
							<Text as="p" size="3">
								Cheeseburger Deluxe
							</Text>
						</Card>
					</div>
				</div>

				<div className="w-full">
					<div className="flex justify-center">
						<Card size="2" className="w-3/4">
							<Inset clip="padding-box" side="top" pb="current">
								<Image
									className="aspect-[3/2] w-full bg-gray-50 object-cover xl:inset-0 xl:aspect-auto xl:h-full"
									src="/images/P1250471.jpg"
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

			{/* Burgers and Wraps */}
			<div className="flex flex-col md:flex-row mt-10 mb-10 w-full">
				<div className="flex flex-col items-center w-full">
					<h1 className={style.MenuHeader}>Burgers</h1>
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
				<div className="w-full">
					<div className="flex flex-col items-center justify-center w-full">
						<h1 className={style.MenuHeader}>Wraps & Sandwiches</h1>
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
			</div>

			<div className='w-full flex flex-col items-center mb-10'>
				<h1 className={style.MenuHeader}>Panini & Grill</h1>
				<Separator className={style.SectionSeparator} />
				<ul className='mt-5 grid grid-cols-1 lg:grid-cols-2'>
					{menu.pizzas.pies.map((pizza, index) => (
						<li key={index} className='px-10'>
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

			{/* Pizza Images */}
			<div className="flex flex-col lg:flex-row items-center gap-5 mt-10 mb-10">
				<div className="w-full">
					<div className="flex justify-center">
						<Card size="2" className="w-3/4">
							<Inset clip="padding-box" side="top" pb="current">
								<Image
									className="aspect-[3/2] w-full bg-gray-50 object-cover xl:inset-0 xl:aspect-auto xl:h-full"
									src="/images/P1250491.jpg"
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

				<div className="w-full">
					<div className="flex justify-center">
						<Card size="2" className="w-3/4">
							<Inset clip="padding-box" side="top" pb="current">
								<Image
									className="aspect-[3/2] w-full bg-gray-50 object-cover xl:inset-0 xl:aspect-auto xl:h-full"
									src="/background/pizza.jpg"
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

			{/* Pizzas */}
			<div className="flex flex-col md:flex-row mt-10 mb-10 w-full p-5">
				<div className="flex flex-col items-center w-full">
					<h1 className={style.MenuHeader}>Signature Pies</h1>
					<Separator className={style.SectionSeparator} />
					<ul>
						{menu.pizzas.pies.map((pizza, index) => (
							<li key={index}>
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
				<div className="w-full">
					<div className="flex flex-col items-center justify-center w-full p-5">
						<h1 className={style.MenuHeader}>Pizza Your Way</h1>
						<Separator className={style.SectionSeparator} />
						<ul>
							{menu.pizzas.modifications.map((item, index) => (
								<li key={index}>
									<div className={style.Item}>
										<div className="flex justify-between">
											<span className={style.ItemName}>
												{item.name}
											</span>
											<span className={style.Price}>
												{(typeof item.price === "number") ? item.price :
													`$${item.price[1]} | $${item.price[0]}`}
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
			</div>

			{/* Signature Pies */}
			{/* <div className="relative">
				<div className="flex flex-col xl:flex-row xl:mx-10 xl:gap-5">
					<div
						className="px-5 z-10 flex flex-col items-center"
						style={{ backgroundColor: 'var(--gray-5)' }}
					>
						<h1 className="text-2xl text-center">Signature Pies</h1>
						<Separator className={style.SectionSeparator} />
						<ul>
							{menu.pizzas.pies.map((pizza, index) => (
								<li key={index}>
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

					<div className="flex inset-0 z-0">
						<Image
							className="aspect-[3/2] w-full bg-gray-50 object-cover xl:inset-0 xl:aspect-auto xl:h-full"
							src="/background/pizza.jpg"
							width={800}
							height={400}
							alt=""
						/>
					</div>
				</div>
			</div>

			<div className="h-[500px]">Pizza Your Way</div> */}
		</div>
	);
}
