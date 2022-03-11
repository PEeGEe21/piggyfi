import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import cn from 'classnames'
import GetApp from '../components/home/GetApp'
import Partners from '../components/home/Partners'
import Blockchain from '../components/home/Blockchain'
import Convert from '../components/home/Convert'
import Save from '../components/home/Save'
import Receive from '../components/home/Receive'
import Send from '../components/home/Send'
import Hero from '../components/home/Hero'

export default function Home() {
  return (
    
    <>
      
      
      <Hero />

      <h2 className="text-center justify-center items-center mx-auto my-[50px] font-bold text-[32px]">Do money transactions with PiggyFi</h2>
      <Send/>
      <Receive/>
      <Save/>

      <Convert/>
      <Blockchain />
      <Partners/>
      <GetApp />

      
    </>
  )
}
