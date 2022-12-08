import type { AppProps } from 'next/app'
import '~root/styles/globals.css'

export default function App(props: AppProps) {
	return <props.Component {...props.pageProps} />
}
