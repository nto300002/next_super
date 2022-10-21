import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './component/Header'
import Layout from './component/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
