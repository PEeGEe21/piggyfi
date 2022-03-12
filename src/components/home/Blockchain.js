import styles from './Blockchain.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Blockchain = () => {
  return (
    <>
                <section className={styles.page_section}>
                  <div className="container w-full ">
                    <div className="pt-[15] pb-[15] mx-auto flex flex-col md:flex-row sm:flex-col px-4 justify-center items-center ">
                      <div className=" ">
                          <div className="text-left pr-0  md:pr-20">
                            <span className={styles.subtitle}>Global Peer-to-peer api</span>

                            <h1 className={styles.heading_title}>
                            Power your Blockchain app with our payment Infrastructure
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-base text-[#000000] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            PiggyFi for business allows you receive money from anywhere with our unique peer-to-peer technology
                            </p>


                            <div className="mt-5 max-w-md  sm:flex sm:justify-start md:mt-8">
                              <div className="rounded-md shadow">
                                <Link href="">
                                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:px-10">
                                    Coming soon
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

                      <div className={styles.imgCard}>


                        <div className=" flex items-center justify-center">
                            {/* <Image src="/images/portrait-of-happy-black-family.png" width="100px" height="100%" alt="Your Name" 
                            layout="fill"
                            objectFit="contain"
                            /> */}
                            <img src="/images/portrait-of-happy-black-family.png" alt="xikwklw" />

                            
                        </div>
                      </div>

                    </div>
                  </div>
                </section>
    </>
  )
}

export default Blockchain;