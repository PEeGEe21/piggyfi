import styles from './Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <>

        <div className={styles.hero}>


            <div className="container-fluid w-full">
                <main className="sm:px-8 px-[10px]   ">
                    <div className="pt-5 pb-24 mx-auto  flex flex-col md:flex-row sm:flex-col justify-center items-center px-4 ">
                    <div className="flex-1">
                        <div className="text-left">
                        <h1 className={styles.heading_title}>
                            A smart way to <span className={styles.effect}>
                                <Typewriter options={{
                                    strings: ['save', 'send', 'invest', 'exchange' ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                    pauseFor: 2000,
                                    
                                }} 

                            
                                /></span> money across Africa
                        </h1>
                        <p className="mt-3 mr-0 sm:mr-10 max:width-auto mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            PiggyFi makes use of the Blockchain to allow for easy and automated peer-to-peer money transfers within and  outside of Africa, as well as saving in US Dollars to protect against inflation and depreciation.
                        </p>

                        <div className="mt-5 max-w-md  sm:flex sm:justify-start md:mt-8">
                            <div className="rounded-md shadow">
                                <Link href="">
                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:px-10">
                                Get early access
                            </a>
                            </Link>
                            </div>

                            {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                            <Link href="">
                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 md:py-4 md:text-lg md:px-10">Join Us</a>
                            </Link>
                            </div> */}

                        </div>


                        </div>
                    </div>

                    <div className="flex-1  w-full text-center">
                        <div className={styles.gallery}>
                            <div className={styles.row}>
                                <div className={styles.column}>
                                    
                                    {/* <Image src="/images/gallery/pic1.png" objectFit="contsin" width="100%" height="100%" />
                                    <Image src="/images/gallery/pic2.png" objectFit="cover" layout="fill" />
                                    <Image src="/images/gallery/pic3.png" objectFit="cover" layout="fill" />
                                    <Image src="/images/gallery/pic4.png" objectFit="cover" layout="fill" /> */}
                                    <img src="/images/gallery/pic1.png"/>
                                    <img src="/images/gallery/pic2.png"/>
                                    <img src="/images/gallery/pic3.png"/>
                                    <img src="/images/gallery/pic4.png"/>
                                </div>
                                <div className={styles.column}>
                                    <img src="/images/gallery/pic5.png"/>
                                    <img src="/images/gallery/pic6.png"/>
                                    <img src="/images/gallery/pic7.png"/>
                                    <img src="/images/gallery/pic8.png"/>
                                </div>
                                <div className={styles.column}>
                                    <img src="/images/gallery/pic9.png"/>
                                    <img src="/images/gallery/pic10.png"/>
                                    <img src="/images/gallery/pic11.png"/>
                                    <img src="/images/gallery/pic12.png"/>
                                </div>
                                <div className={styles.column}>
                                    <img src="/images/gallery/pic13.png"/>
                                    <img src="/images/gallery/pic14.png"/>
                                    <img src="/images/gallery/pic15.png"/>
                                    <img src="/images/gallery/pic16.png"/>
                                </div>
                            </div>



                            {/* <div className="grid grid-cols-4 grid-flow-col gap-4">
                            <div className="row-span-3 relative"><Image src="/images/portrait-of-happy-black-family.png" objectFit="contain" layout="fill" width={50} height={50}/></div>
                                <div>09</div>
                                <div className="relative"><img src="/images/portrait-of-happy-black-family.png" width={50} height={50}/></div>
                                <div>09</div>
                            </div> */}
                        </div>

                        {/* <div className="grid grid-rows-3 grid-flow-col gap-4">
                        <div className="row-span-3 ...">01</div>
                        <div className="col-span-2 ...">02</div>
                        <div className="row-span-2 col-span-2 ...">03</div>
                        </div> */}
                        
                    {/* <div className="grid grid-rows-5 grid-flow-col gap-4 text-white">
                        
                    <div className="row-span-4 col-span-2 bg-black w-full h-full">05</div>

  <div className="row-span-3 col-span-2 bg-red-400 w-full h-full ...">01</div>
  <div className="col-span-2 bg-red-900	w-full h-full ...">02</div>
  <div className="row-span-4 col-span-2 bg-black w-full h-full ...">03</div>
  <div className="row-span-3 col-span-2 bg-amber-300 w-full h-full ...">04</div>

</div> */}
                    
                    </div>

                    </div>
                </main>
            </div>
        </div>

    </>
  )
}
