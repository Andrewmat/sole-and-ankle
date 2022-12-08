import React, { useEffect } from 'react'
import classnames from '~/classnames'
import styles from './index.module.css'

type Props = React.HTMLAttributes<HTMLDivElement>

const VisuallyHidden = (props: Props) => {
	const [forceShow, setForceShow] = React.useState(false)

	useEffect(() => {
		if (process.env.NODE_ENV !== 'production') {
			const handleKeyDown = (ev: KeyboardEvent) => {
				if (ev.key === 'Alt') {
					setForceShow(true)
				}
			}

			const handleKeyUp = () => {
				setForceShow(false)
			}

			window.addEventListener('keydown', handleKeyDown)
			window.addEventListener('keyup', handleKeyUp)

			return () => {
				window.removeEventListener('keydown', handleKeyDown)
				window.removeEventListener('keydown', handleKeyUp)
			}
		}
	}, [])

	const { className, children, ...delegatedProps } = props

	if (forceShow) {
		return <>{children}</>
	}

	return (
		<div
			className={classnames([styles.wrapper, className])}
			{...delegatedProps}
		>
			{children}
		</div>
	)
}

export default VisuallyHidden
