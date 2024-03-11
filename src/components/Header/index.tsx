import { Flex, Heading, Text } from '@radix-ui/themes';
import style from './style.module.scss';
import Link from 'next/link';

export default function Header() {
	return (
		<div className={style.Header}>
			<div className={style.Content}>
				<Heading>
					<Link href="/">Cumberland Foodstop</Link>
				</Heading>
				<span></span>
				<Flex gap="3">
					<Link href="/menu">
						<Text>Menu</Text>
					</Link>
					<Link href="/contact">
						<Text>Contact</Text>
					</Link>
				</Flex>
			</div>
		</div>
	);
}
