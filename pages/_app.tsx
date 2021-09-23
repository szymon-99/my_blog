import '../styles.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
// import {MdxProvider} from 'next-mdx-remote'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
