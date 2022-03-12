import Head from 'next/head'
import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

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
