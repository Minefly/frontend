import Document, { Html, Main, NextScript, Head } from "next/document";

export default class MineflyDocument extends Document {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="/minefly-rocket-dynamic.svg" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
