import Link from 'next/link';
import style from './style.module.scss';

export default function Footer() {
	return <footer className={style.Footer}>
		<ul>
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>⋅</li>
			<li>
				<Link href="/menu">Menu</Link>
			</li>
			<li>⋅</li>
			<li>
				<Link href="/about">About</Link>
			</li>
			<li>⋅</li>
			<li>
				<Link href="/contact">Contact</Link>
			</li>
		</ul>
		<p className="copyright text-muted small">Copyright © {new Date().getFullYear()} Cumberland Foodstop. All Rights Reserved.</p>
	</footer>
}
