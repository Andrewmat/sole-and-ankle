import { Children } from 'react'
import Icon from '../Icon'
import styles from './index.module.css'
import { ChevronDown as ChevronDownIcon } from 'react-feather'
import classnames from '~/classnames'

type Props = Omit<
	React.SelectHTMLAttributes<HTMLSelectElement>,
	'label' | 'value' | 'children'
> & {
	label: React.ReactNode
	value: string
	children: React.ReactNode
}

export default function Select(props: Props) {
	const { label, value, children, className, ...delegatedProps } = props

	const selectedChild = Children.toArray(children).find((child) => {
		if (child == null) return false
		if (typeof child !== 'object') return false
		if ('props' in child) {
			return child.props.value == value
		}
	}) as React.ReactElement

	const displayedValue = selectedChild.props.children

	return (
		<label className={styles.wrapper}>
			<span className={styles.visibleLabel}>{label}</span>
			<div className={styles.selectWrapper}>
				<select
					className={classnames([className, styles.nativeSelect])}
					{...delegatedProps}
				>
					{children}
				</select>
				<span className={styles.displayedBit}>
					{displayedValue}
					<Icon className={styles.chevronIcon}>
						<ChevronDownIcon />
					</Icon>
				</span>
			</div>
		</label>
	)
}
