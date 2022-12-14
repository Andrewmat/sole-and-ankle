import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />
				<meta name='theme-color' content='#000000' />
				<meta name='description' content='Sole & Ankle | Wear foot, footwear' />
				<link rel='apple-touch-icon' href='/logo192.png' />
				<link rel='manifest' href='/manifest.json' />

				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;800&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
