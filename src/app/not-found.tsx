'use client';

import { Button, Flex, Heading, Theme } from '@radix-ui/themes';
import Link from 'next/link';
import MainLayout from './(index)/layout';

// export const runtime = 'edge';

export default function NotFound() {
	return (
		<MainLayout>
			<Theme
				accentColor="teal"
				grayColor="gray"
				panelBackground="solid"
				scaling="100%"
				radius="medium"
				appearance="dark"
				asChild
			>
				<div className="min-h-full flex-1 flex flex-col">
					<Flex
						direction="column"
						align="center"
						justify="center"
						asChild
					>
						<main className="flex-1">
							<Heading className="pb-4">
								404: Page Not Found
							</Heading>
							<Button asChild>
								<Link href="/">Go Home</Link>
							</Button>
						</main>
					</Flex>
				</div>
			</Theme>
		</MainLayout>
	);
}
