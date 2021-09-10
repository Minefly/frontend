import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // The theme provider is used for easily managing the theme
    <ThemeProvider attribute="class">
      <div className="min-h-screen w-full dark:bg-gray-800 dark:text-gray-200 leading-relaxed flex flex-col text-primary-50">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
export default MyApp;
