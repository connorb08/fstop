'use client';
import { DropdownMenu, IconButton } from '@radix-ui/themes';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import style from './style.module.scss';

export default function MobileMenu() {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<IconButton variant="ghost">
					<HamburgerMenuIcon width={20} height={20} />
				</IconButton>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content size={'2'}>
				<DropdownMenu.Item>
					<Link href="/menu">Menu</Link>
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<Link href="/about">About</Link>
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<Link href="/contact">Contact</Link>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}
