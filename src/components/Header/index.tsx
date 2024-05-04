import { Heading, Text } from '@radix-ui/themes';
import style from './style.module.scss';
import Link from 'next/link';
import MobileMenu from '../MobileMenu';

const links = [
	{
		href: '/menu',
		text: 'Menu',
	},
	{
		href: '/about',
		text: 'About',
	},
	{
		href: '/contact',
		text: 'Contact',
	},
	{
		href: '/wine',
		text: 'Wine',
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
				<span className="hidden sm:flex gap-8">
					{links.map((link, index) => (
						<Link key={index} href={link.href}>
							<Text>{link.text}</Text>
						</Link>
					))}
				</span>
				{/* Mobile Menu */}
				<span className="block sm:hidden">
					<MobileMenu links={links} />
				</span>
			</div>
		</div>
	);
}
