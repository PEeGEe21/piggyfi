import styles from './Convert.module.css'
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; 

const Convert = () => {
  return (
    <>
      <section className={styles.page_section}>
      <div className="container w-full ">
                    <div className="pt-[15] pb-[15] mx-auto flex flex-col-reverse md:flex-row sm:flex-col sm:px-4 px-2 justify-center items-center ">
      {/* <div className="container w-full"> */}
                {/* <section className="px-[100px] "> */}
                    {/* <div className="pt-24 pb-24 mx-auto flex px-4 "> */}
                    <div className={styles.imgCard}>
                      <div className=" flex items-center justify-start">


<img src="/images/portrait-of-happy-black-family.png" alt="nience" />
                        {/* <div className="relative"> */}
                            {/* <Image src="/images/portrait-of-happy-black-family.png" width="500px" height="100%" alt="Your Name" 
                            objectFit="contain"
                            /> */}
                            </div>
                            
                        {/* </div> */}
                      </div>

                      <div className=" ">
                          <div className={styles.text_grid}>
                            <h1 className={styles.heading_title}>
                            Convert at unbeatable rates using P2P exchange                       
                            </h1>
                              <p className="mt-3 mx-auto text-base text-[#000000] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                              PiggyFi allows you to send money to your friends and family within and outside these counties.
                              </p>


                              <div className={styles.learn_more}>
                                <Link href="">
                                <a className=" inline-block items-center justify-start py-3 text-base font-medium text-indigo-600	 md:py-4 ">Learn More 
                                <FontAwesomeIcon style={{fontSize:"12px", marginLeft:'15px'}} icon={faLongArrowAltRight}></FontAwesomeIcon>

                              </a>
                              </Link>
                            </div>



                        


                          </div>
                      </div>

                      

                    </div>
            </div>
                </section>
    </>
  )
}

export default Convert;