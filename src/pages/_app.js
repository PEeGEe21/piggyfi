import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'
// import font from '../../asset/font/stylesheet.css'

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
        <link
          href="/font/font/stylesheet.css"
          rel="stylesheet"
        />
        {/* <link
          href="../asset/OpenSans/OpenSans-ExtraBoldItalic.ttf"
          rel="stylesheet"
          /> */}
    </Head>
    
    <Layout>

     <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
