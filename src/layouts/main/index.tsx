import Link from 'next/link'
import VisuallyHidden from '~/ui/VisuallyHidden'
import { ShoppingBag as ShoppingBagIcon } from 'react-feather'
import Searchbox from '~/ui/Searchbox'
import styles from './index.module.css'

type Props = {
	children: React.ReactNode
}

export default function MainLayout(props: Props) {
	return (
		<>
			<header>
				<div className={styles.superheader}>
					<span className={styles.superheaderAlert}>
						Free shipping on domestic orders over $75!
					</span>
					<Searchbox placeholder='Search...' />
					<Link href='/help' className={styles.superheaderLink}>
						Help
					</Link>
					<button type='button' className={styles.bag}>
						<VisuallyHidden>Shopping bag</VisuallyHidden>
						<ShoppingBagIcon className={styles.bagIcon} />
					</button>
				</div>

				<div className={styles.mainHeader}>
					<div className={styles.sideMargin}>
						<Logo />
					</div>
					<nav className={styles.nav}>
						<HeaderLink href='/sale'>Sale</HeaderLink>
						<HeaderLink href='/new'>New Releases</HeaderLink>
						<HeaderLink href='/men'>Men</HeaderLink>
						<HeaderLink href='/women'>Women</HeaderLink>
						<HeaderLink href='/kids'>Kids</HeaderLink>
						<HeaderLink href='/collections'>Collections</HeaderLink>
					</nav>

					<div className={styles.sideMargin} />
				</div>
			</header>
			<main className={styles.main}>{props.children}</main>
		</>
	)
}

function Logo() {
	return (
		<Link href='/' className={styles.logoLink}>
			<h1 className={styles.logoHeading}>Sole&Ankle</h1>
		</Link>
	)
}

type NavLinkProps = {
	href: string
	children: React.ReactNode
}

function HeaderLink(props: NavLinkProps) {
	return (
		<Link href={props.href} className={styles.headerLink}>
			{props.children}
		</Link>
	)
}
