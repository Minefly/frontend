import Document, { Html, Head, Main, NextScript } from "next/document";

export default class Doc extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body className="overflow-x-hidden">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
