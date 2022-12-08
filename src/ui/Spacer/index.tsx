import styles from './index.module.css'

type Props = {
	axis: 'horizontal' | 'vertical'
	size: number
}

export default function Spacer(props: Props) {
	const width = props.axis === 'vertical' ? 1 : props.size
	const height = props.axis === 'horizontal' ? 1 : props.size
	return (
		<span
			className={styles.spacer}
			style={{
				'--width': `${width}px`,
				'--height': `${height}px`,
			}}
		/>
	)
}
