import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react'
import  Head  from 'next/head';
import { FC } from 'react';

    import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // The theme provider is used for easily managing the theme
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      </ThemeProvider>)
}
export default MyApp
