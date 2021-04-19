import Document, {
	Html,
	Main,
	NextScript,
	Head,
	DocumentProps,
} from "next/document";

export default class MineflyDocument extends Document {
	constructor(props: DocumentProps) {
		super(props);
	}

	render() {
		return (
			<Html className="dark">
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
