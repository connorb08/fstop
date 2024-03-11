import { Flex, Heading, IconButton, Text } from '@radix-ui/themes';
import style from './style.module.scss';
import Link from 'next/link';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function Header() {
	return (
		<div className={style.Header}>
			<div className={style.Content}>
				<Heading>
					<Link href="/">Cumberland Foodstop</Link>
				</Heading>
				{/* Normal Display */}
				<Flex gap="3" className="hidden sm:flex">
					<Link href="/menu">
						<Text>Menu</Text>
					</Link>
					<Link href="/contact">
						<Text>Contact</Text>
					</Link>
				</Flex>
				{/* Mobile Menu */}
				<span className="block sm:hidden">
					<IconButton>
						<HamburgerMenuIcon width="18" height="18" />
					</IconButton>
				</span>
			</div>
		</div>
	);
}
