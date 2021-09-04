import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react'
import  Head  from 'next/head';
import { FC } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  return (<Component {...pageProps} />)
}
export default MyApp
