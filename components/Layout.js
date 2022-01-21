import Link from 'next/link'
import styles from '../styles/Home.module.scss';
import Image from 'next/image'
import Nav from './Nav';

function Layout({ children }) {
  return (
		<>
		<header>
		<p className={styles.logo}>
      <Link href="/">
        <a>
          <Image src="/satonogopan.svg" width={100} height={100} alt="" />
          <span className={styles.sitetitle}>さとうのごぱん</span>
        </a>
      </Link>
    </p>
    <Nav />
		</header>
		{children}
		<footer>
		<address>&copy; satonogopan.</address>
		</footer>
		</>
	)
}

export default Layout
