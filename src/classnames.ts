export default function classnames(list: (string | null | undefined)[]) {
	return list.filter(Boolean).join(' ')
}
