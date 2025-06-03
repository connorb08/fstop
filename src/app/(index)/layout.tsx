import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Theme } from '@radix-ui/themes';

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
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
				<main
					className="flex-1 flex flex-col"
					style={{ backgroundColor: 'var(--gray-5)' }}
				>
					{children}
				</main>
				<Footer />
			</div>
		</Theme>
	);
}
