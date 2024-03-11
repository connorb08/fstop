import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import './globals.css';
import '@radix-ui/themes/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Cumberland Foodstop',
	description:
		"We started operating in Cumberland, Maine in 1998. Since then, we've seen plenty of changes in the way people approach food — and we couldn't be more excited.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
			<body className={inter.className + ' h-full flex flex-col'}>
				<Theme
					accentColor="mint"
					grayColor="gray"
					panelBackground="solid"
					scaling="100%"
					radius="full"
					asChild
				>
					<div className="flex-1 flex flex-col">{children}</div>
				</Theme>
			</body>
		</html>
	);
}
