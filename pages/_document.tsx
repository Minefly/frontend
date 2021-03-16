import Document, { Html, Main, NextScript, Head } from "next/document";

export default class MineflyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="./minefly-rocket.svg" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
