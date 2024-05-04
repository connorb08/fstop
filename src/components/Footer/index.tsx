import Link from 'next/link';
import style from './style.module.scss';
import { Fragment } from 'react';

const links = [
	{
		name: "Home",
		href: "/"
	},
	{
		name: "Menu",
		href: "/menu"
	},
	{
		name: "About",
		href: "/about"
	},
	{
		name: "Contact",
		href: "/contact"
	}
]

export default function Footer() {
	return <footer className={style.Footer}>
		<ul>
			{links.map((link, index, arr) => (
				<Fragment key={index}>
					<li>
						<Link href={link.href}>{link.name}</Link>
					</li>
					{(index < arr.length - 1) ? <li>⋅</li> : null}
				</Fragment>
			))}
		</ul>
		<p>Copyright © {new Date().getFullYear()} Cumberland Foodstop. All Rights Reserved.</p>
	</footer>
}
