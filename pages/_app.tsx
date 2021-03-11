import { AppProps } from "next/app";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<div className="root h-screen w-screen dark:bg-gray-800">
			<Component {...pageProps} />
		</div>
	);
}

export default App;
