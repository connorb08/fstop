'use client';
import { DropdownMenu, IconButton } from '@radix-ui/themes';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';

export default function MobileMenu(props: PropsWithChildren<{ links: { href: string; text: string }[] }>) {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<IconButton variant="ghost">
					<HamburgerMenuIcon width={20} height={20} />
				</IconButton>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content size={'2'}>
				{props.links.map((link, index) => (
					<DropdownMenu.Item key={index}>
						<Link href={link.href}>{link.text}</Link>
					</DropdownMenu.Item>
				))}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}
