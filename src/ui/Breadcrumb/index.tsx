import Link from 'next/link'
import styles from './index.module.css'

type Props = {
	children: React.ReactNode
}

export function Breadcrumb(props: Props) {
	return <nav className={styles.breadcrumb}>{props.children}</nav>
}

type CrumbProps = {
	href: string
	children: React.ReactNode
}

export function Crumb(props: CrumbProps) {
	return (
		<div className={styles.crumb}>
			<Link href={props.href}>{props.children}</Link>
		</div>
	)
}
