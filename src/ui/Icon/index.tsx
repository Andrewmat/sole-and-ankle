import classnames from '~/classnames'
import styles from './index.module.css'

type Props = React.HTMLAttributes<HTMLDivElement> & {
	children: React.ReactNode
}

export default function Icon(props: Props) {
	const { children, className, ...delegatedProps } = props
	return (
		<div
			className={classnames([styles.iconWrapper, className])}
			{...delegatedProps}
		>
			{children}
		</div>
	)
}
