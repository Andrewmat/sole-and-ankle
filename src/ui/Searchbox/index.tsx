import styles from './index.module.css'
import { Search as SearchIcon } from 'react-feather'
import VisuallyHidden from '../VisuallyHidden'
import Icon from '../Icon'
import classnames from '~/classnames'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export default function Searchbox(props: Props) {
	const { className, ...delegatedProps } = props

	return (
		<label className={styles.label}>
			<VisuallyHidden>Search</VisuallyHidden>
			<Icon className={styles.searchIconWrapper}>
				<SearchIcon className={styles.searchIcon} />
			</Icon>
			<input
				className={classnames([styles.input, className])}
				{...delegatedProps}
			/>
		</label>
	)
}
