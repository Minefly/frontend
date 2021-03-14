import { AppProps } from "next/app";
import "../styles/globals.css";

import Footer from "../components/footer";

function App({ Component, pageProps }: AppProps) {
	return (
		<div className="flex flex-wrap root min-h-screen w-full dark:bg-gray-800 dark:text-white overflow-x-hidden overflow-y-visible">
			<div className="w-full">
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
