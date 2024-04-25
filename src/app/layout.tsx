import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import './globals.css';
import '@radix-ui/themes/styles.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


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
		<html lang="en" className="h-full dark">
			<body className={inter.className + ' h-full flex flex-col'}>
				<Theme
					accentColor="teal"
					grayColor="gray"
					panelBackground="solid"
					scaling="100%"
					radius="medium"
					appearance="dark"
					asChild
				>
					<div className="flex-1 flex flex-col">
						<Header />
						<main className="flex-1 flex flex-col" style={{ backgroundColor: "var(--gray-5)" }}>{children}</main>
						<Footer />
					</div>
				</Theme>
			</body>
		</html>
	);
}
