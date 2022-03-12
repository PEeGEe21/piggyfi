import Image from 'next/image';
import styles from './Save.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; 


const Save = () => {
  return (
    <>
      <section className={styles.page_section}>
      <div className="container w-full ">
                    <div className="pt-[15] pb-[15] mx-auto flex flex-col md:flex-row sm:flex-col px-4 justify-center items-center ">
      {/* <div className="container w-full"> */}
                {/* <section className="px-[100px] "> */}
                    {/* <div className="pt-24 pb-24 mx-auto flex px-4 "> */}
                    

                      <div className="flex-1 ">
                          <div className="text-left sm:pr-[100px] pr-[0]">
                            <h1 className={styles.heading_title}>
                            Save and earn up to 10% Annual Interest
                            </h1>
                              <p className="mt-3 max-w-md mx-auto text-base text-[#000000] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                              PiggyFi allows you to send money to your friends and family within and outside these counties.                              
                              </p>


                              {/* <div className="my-5 py-3">
                              <Link href="">
                              <a className="w-full items-center justify-start py-3 text-base font-medium text-indigo-600	 md:py-4 ">Start saving</a>
                              </Link>
                            </div> */}

                              <div className="my-2 py-3 flex items-center learn-more w-1/4">
                                <Link href="">
                                  <a className="w-full inline-block items-center justify-start py-3 text-base font-medium text-indigo-600	 md:py-4 ">Learn More 
                                  <FontAwesomeIcon style={{fontSize:"12px", marginLeft:'15px'}} icon={faLongArrowAltRight}></FontAwesomeIcon>

                                </a>
                                </Link>
                              </div>



                        


                          </div>
                      </div>

                      <div className={styles.imgCard}>


                        {/* <div className="relative"> */}
                            <Image src="/images/portrait-of-happy-black-family.png" width="100px" height="100%" alt="Your Name" 
                            layout="fill"
                            objectFit="contain"
                            />
                            
                        {/* </div> */}
                      </div>

                      

                    </div>
            </div>
                </section>
    </>
    )
}

export default Save;