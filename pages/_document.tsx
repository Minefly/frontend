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
            <Html className="dark dark:text-gray-200" lang="en">
                <Head>
                    <link
                        rel="shortcut icon"
                        href="/minefly-rocket-dynamic.svg"
                    />
                    <link rel="manifest" href="/minefly.webmanifest" />
                    <meta
                        name="description"
                        content="Free, community-first Minecraft server hosting"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
