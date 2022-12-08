import Link from 'next/link'
import classnames from '~/classnames'
import styles from './SideMenu.module.css'

export default function SideMenu() {
	return (
		<aside>
			<SideLink href='/lifestyle'>Lifestyle</SideLink>
			<SideLink href='/jordan'>Jordan</SideLink>
			<SideLink href='/running' active>
				Running
			</SideLink>
			<SideLink href='/basketball'>Basketball</SideLink>
			<SideLink href='/training'>Training & Gym</SideLink>
			<SideLink href='/football'>Football</SideLink>
			<SideLink href='/skateboarding'>Skateboarding</SideLink>
			<SideLink href='/us-football'>American Football</SideLink>
			<SideLink href='/baseball'>Baseball</SideLink>
			<SideLink href='/golf'>Golf</SideLink>
			<SideLink href='/tennis'>Tennis</SideLink>
			<SideLink href='/athletics'>Athletics</SideLink>
			<SideLink href='/walking'>Walking</SideLink>
		</aside>
	)
}

type NextLinkProps = typeof Link extends React.ComponentType<infer Props>
	? Props
	: never

type LinkProps = NextLinkProps & {
	active?: boolean
}

function SideLink(props: LinkProps) {
	const { className, href, active, children, ...delegatedProps } = props
	return (
		<Link
			href={href}
			className={classnames([
				className,
				styles.sideLink,
				active ? styles.active : null,
			])}
			{...delegatedProps}
		>
			{children}
		</Link>
	)
}
