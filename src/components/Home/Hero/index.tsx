import { NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import style from "./style.module.css"

const cards = [

	{
		name: 'Contact Us',
		description: <><p>(207) 829-3250</p><p>Mon-Fri: 6am-9pm</p><p>Sat: 7am-9pm</p></>,
		icon: PhoneIcon,
		href: "tel:207-829-3250"
	},
	{
		name: 'Menu',
		description: <p>View our menu</p>,
		icon: NewspaperIcon,
		href: "/menu"
	},
	{
		name: 'Facebook',
		description: <p>Follow our Facebook page for the most up to date info</p>,
		icon: NewspaperIcon,
		href: "https://www.facebook.com/CFoodstop/"
	},
];

export default function Hero() {
	return (
		<div className={style.Hero}>
			<Image
				src="/background/wine.jpg"
				alt="Background image"
				width={0}
				height={0}
				sizes="100vw"
				className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
				priority
			/>
			<div className='absolute h-full w-full bg-black/50 -z-10 inset-0'></div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex flex-col justify-center items-end">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">
						Cumberland Foodstop
					</h2>
					<p className="mt-6 text-lg leading-8 text-white p-4 bg-white/5 rounded-xl">
						At Cumberland Food Stop, we think good food and quality ingredients should be available to everyone at prices that don’t cost an arm and a leg. We started operating in Cumberland, Maine in 1998. Since then, we’ve seen plenty of changes in the way people approach food — and we couldn’t be more excited. Come and check us out in person and discover something delicious today.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
					{cards.map((card) => (
						<Link
							href={card.href}
							key={card.name}
							className="flex gap-x-4 rounded-xl bg-black/50 p-6 ring-1 ring-inset ring-white/10 hover:bg-black/75"
						>
							<card.icon
								className="h-7 w-5 flex-none"
								style={{ color: 'var(--teal-9)' }}
								aria-hidden="true"
							/>
							<div className="text-base leading-7">
								<h3 className="font-semibold text-whit text-xl">
									{card.name}
								</h3>
								<div className="mt-2 text-white text-lg">
									{card.description}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}