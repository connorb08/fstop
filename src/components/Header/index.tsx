import { Flex, Heading, Text } from '@radix-ui/themes';
import style from './style.module.scss';
import Link from 'next/link';
import MobileMenu from '../MobileMenu';

export default function Header() {
	return (
		<div className={style.Header}>
			<div className={style.Content}>
				<Heading>
					<Link href="/">Cumberland Foodstop</Link>
				</Heading>
				{/* Normal Display */}
				<span className="hidden sm:flex gap-3">
					<Link href="/menu">
						<Text>Menu</Text>
					</Link>
					<Link href="/about">
						<Text>About</Text>
					</Link>
					<Link href="/contact">
						<Text>Contact</Text>
					</Link>
				</span>
				{/* Mobile Menu */}
				<span className="block sm:hidden">
					<MobileMenu />
				</span>
			</div>
		</div>
	);
}
