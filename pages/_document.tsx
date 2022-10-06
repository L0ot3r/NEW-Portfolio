import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='fr-FR'>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body className='bg-[#1a1a1a]'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
