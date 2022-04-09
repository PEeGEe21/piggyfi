import Head from 'next/head'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import styles from './Layout.module.css'


const Layout = ({children}) => {
  return (
        <>
        <Head>
        <title>PiggyFi</title>
        <meta name="description" content="Save and send money" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
            <Navbar/>
                {children}
            <Footer/>
        </>
  )
}

export default Layout;
