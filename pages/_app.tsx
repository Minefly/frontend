import { AppProps } from "next/app";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<div className="min-h-screen w-full dark:bg-gray-800 dark:text-white overflow-x-hidden overflow-y-visible">
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default App;
