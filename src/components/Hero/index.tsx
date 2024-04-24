import { NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

const cards = [
	{
		name: 'Menu',
		description:
			'View our menu',
		icon: NewspaperIcon,
		href: "#"
	},
	{
		name: 'Contact Us',
		description:
			"(207) 123-4567",
		icon: PhoneIcon,
		href: "#"
	},
	{
		name: 'Wine & Beer',
		description:
			'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
		icon: NewspaperIcon,
		href: "#"
	},
];

export default function Example() {
	return (
		<div className="relative isolate overflow-hidden h-full"> {/* py-24 sm:py-32">*/}
			<Image
				src="/background/wine.jpg"
				alt="Background image"
				width={0}
				height={0}
				sizes="100vw"
				className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
				priority
			/>
			<div className='absolute h-full w-full bg-black/50 -z-10'></div>
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
								className="h-7 w-5 flex-none text-indigo-400"
								aria-hidden="true"
							/>
							<div className="text-base leading-7">
								<h3 className="font-semibold text-white">
									{card.name}
								</h3>
								<p className="mt-2 text-white text-lg">
									{card.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
