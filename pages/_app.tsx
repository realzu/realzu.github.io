import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <meta property='og:title' content='Realzu네 깃허브' />
        <meta property='og:description' content='여기는 realzu.github.io' />
      </head>
      <Component {...pageProps} />
    </>
  )
}