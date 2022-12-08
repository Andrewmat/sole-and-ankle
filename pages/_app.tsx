import type { AppProps } from 'next/app'
import Head from 'next/head'
import '~root/styles/globals.css'

export default function App(props: AppProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<props.Component {...props.pageProps} />
		</>
	)
}
