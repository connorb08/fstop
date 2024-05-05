import { Heading, Text } from '@radix-ui/themes';
import style from './style.module.scss';
import Link from 'next/link';
import MobileMenu2 from "@/components/MobileMenu/slide";

const links = [
	{
		href: '/menu',
		text: 'Menu',
	},
	{
		href: '/wine',
		text: 'Wine',
	},
	{
		href: '/about',
		text: 'About',
	},
]

export default function Header() {
	return (
		<div className={style.Header}>
			<div className={style.Content}>
				<Heading>
					<Link href="/">Cumberland Foodstop</Link>
				</Heading>
				{/* Normal Display */}
				<span className="hidden sm:flex gap-8 items-center">
					{links.map((link, index) => (
						<Link key={index} href={link.href}>
							<Text>{link.text}</Text>
						</Link>
					))}
				</span>
				{/* Mobile Menu */}
				{/* <span className="block sm:hidden">
					<MobileMenu links={links} />
				</span> */}
				<span className="block sm:hidden">
					<MobileMenu2 links={links} />
				</span>
			</div>
		</div>
	);
}
