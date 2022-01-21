import styles from '../styles/Home.module.scss';
import Link from 'next/link'

export default function Nav() {
	return (
		<nav>
			<ul className={styles.nav}>
				<li>
					<Link href="/">
						<a>さとうについて</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>アーカイブ</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
