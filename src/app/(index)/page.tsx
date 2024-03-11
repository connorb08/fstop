import Header from '@/components/Header';
import styles from './style.module.scss';
import { Button } from '@radix-ui/themes';

export default function Home() {
	return (
		<main className={styles.Main}>
			<Header />
			<h1>Index</h1>
		</main>
	);
}
