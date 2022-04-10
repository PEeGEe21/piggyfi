import styles from './Send.module.css'
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; 


const Send = () => {
  return (
    <>
      
      <section className={styles.page_section}>
      <div className="container w-full ">

        <div className=" grid  grid-cols-1 md:grid-cols-2 sm:grid-cols-2 	 gap-8 pt-[15] pb-[15] px-4 justify-center items-center ">
          <div>
                          <div className="text-left sm:pr-[100px] pr-[0]">
                            <h1 className={styles.heading_title}>
                                Send and Recieve money
                            </h1>
                            <p className="mt-3 text-base text-[#000000] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            With PiggyFi, you can send money easily to friends, family and business partners in Africa and abroad. The best part? Transaction charges are ridiculously low.
                            </p>


                            {/* <div className="my-5 py-3">
                            <Link href="">
                            <a className="w-full items-center justify-start py-3 text-base font-medium text-indigo-600	my-4 md:py-4 ">Learn More</a>
                            </Link>
                            </div> */}
                            <div className="my-2 py-3 flex items-center learn-more w-auto">
                              <Link href="">
                                <a className=" inline-block items-center justify-start py-3 text-base font-medium text-indigo-600	 md:py-4 ">Learn More 
                                <FontAwesomeIcon style={{fontSize:"12px", marginLeft:'15px'}} icon={faLongArrowAltRight}></FontAwesomeIcon>

                              </a>

                              </Link>
                              </div>



                                <div className={styles.country_logo}>
                                  <ul className="flex inline-block justify-start">
                                    <li><Image src="/images/NG.svg" width="35px" height="30px" alt="Nigeria" objectFit="cover"/></li>
                                    <li><Image src="/images/GH.svg" width="35px" height="30px" alt="Ghana" objectFit="cover"/></li>
                                    <li><Image src="/images/KE.svg" width="35px" height="30px" alt="Kenya" objectFit="cover"/></li>
                                    <li><Image src="/images/ZW.svg" width="35px" height="30px" alt="Botswana" objectFit="cover"/></li>
                                    <li><Image src="/images/BW.svg" width="35px" height="30px" alt="Botswana" objectFit="cover"/></li>
                                    <li><Image src="/images/ZA.svg" width="35px" height="30px" alt="South Africa" objectFit="cover" /></li>

                                  
                                  </ul>

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

               
               <section className={styles.page_section}>

                <div className="container w-full">
                    <div className="flex flex-col md:flex-row sm:flex-col flex-wrap justify-center align-center  px-4">
                      <div className="left-card">
                          <div className="text-left pr-[0px] md:pr-[100px] sm:pr-[0px] ">
                            <h1 className={styles.heading_title}>
                                Send and Recieve money
                            </h1>

                            <p className="mt-3 text-base text-[#000000] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            With PiggyFi, you can send money easily to friends, family and business partners in Africa and abroad. The best part? Transaction charges are ridiculously low.
                            </p>

                            <div className="my-2 py-3 flex items-center learn-more w-auto">
                                <Link href="">
                                    <a className=" inline-block items-center justify-start py-3 text-base font-medium text-indigo-600	 md:py-4 ">Learn More 
                                      <FontAwesomeIcon style={{fontSize:"12px", marginLeft:'15px'}} icon={faLongArrowAltRight}></FontAwesomeIcon>

                                    </a>

                                </Link>
                            </div>



                                <div className={styles.country_logo}>
                                  <ul className="flex inline-block justify-start">
                                    <li><Image src="/images/NG.svg" width="35px" height="30px" alt="Nigeria" objectFit="cover"/></li>
                                    <li><Image src="/images/GH.svg" width="35px" height="30px" alt="Ghana" objectFit="cover"/></li>
                                    <li><Image src="/images/KE.svg" width="35px" height="30px" alt="Kenya" objectFit="cover"/></li>
                                    <li><Image src="/images/ZW.svg" width="35px" height="30px" alt="Botswana" objectFit="cover"/></li>
                                    <li><Image src="/images/BW.svg" width="35px" height="30px" alt="Botswana" objectFit="cover"/></li>
                                    <li><Image src="/images/ZA.svg" width="35px" height="30px" alt="South Africa" objectFit="cover" /></li>

                                  
                                  </ul>

                                  </div>

                        


                          </div>
                      </div>
                      
                      <div className="right-card">
                            <div className="imgCard">
                                <img src="/images/send_img.png" width="100px" height="100%" alt="Your Name" className="img-fluid"
                                />
                              </div>
                      </div>
                        
                    </div>
                </div>
               </section>


                    {/* <div className="pt-[15] pb-[15] mx-auto flex flex-col md:flex-row sm:flex-col px-4 justify-center items-center ">
                      <div className="flex-1 ">
                          <div className="text-left sm:pr-[100px] pr-[0]">
                            <h1 className={styles.heading_title}>
                                Send and Recieve money
                            </h1>
                            <p className="mt-3 text-base text-[#000000] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            With PiggyFi, you can send money easily to friends, family and business partners in Africa and abroad. The best part? Transaction charges are ridiculously low.
                            </p>


                            {/* <div className="my-5 py-3">
                            <Link href="">
                            <a className="w-full items-center justify-start py-3 text-base font-medium text-indigo-600	my-4 md:py-4 ">Learn More</a>
                            </Link>
                            </div> *
                            <div className="my-2 py-3 flex items-center learn-more w-auto">
                              <Link href="">
                                <a className=" inline-block items-center justify-start py-3 text-base font-medium text-indigo-600	 md:py-4 ">Learn More 
                                <FontAwesomeIcon style={{fontSize:"12px", marginLeft:'15px'}} icon={faLongArrowAltRight}></FontAwesomeIcon>

                              </a>

                              </Link>
                              </div>



                                <div className={styles.country_logo}>
                                  <ul className="flex inline-block justify-start">
                                    <li><Image src="/images/NG.svg" width="35px" height="30px" alt="Nigeria" objectFit="cover"/></li>
                                    <li><Image src="/images/GH.svg" width="35px" height="30px" alt="Ghana" objectFit="cover"/></li>
                                    <li><Image src="/images/KE.svg" width="35px" height="30px" alt="Kenya" objectFit="cover"/></li>
                                    <li><Image src="/images/ZW.svg" width="35px" height="30px" alt="Botswana" objectFit="cover"/></li>
                                    <li><Image src="/images/BW.svg" width="35px" height="30px" alt="Botswana" objectFit="cover"/></li>
                                    <li><Image src="/images/ZA.svg" width="35px" height="30px" alt="South Africa" objectFit="cover" /></li>

                                  
                                  </ul>

                                  </div>

                        


                          </div>
                      </div>

                      <div className={styles.imgCard}>


                        {/* <div className="relative"> *
                            <Image src="/images/send_img.png" width="100px" height="100%" alt="Your Name" 
                            layout="fill"
                            objectFit="contain"
                            />
                            
                            {/* <img src="/images/send_img.png" alt=""/> */}
                        {/* </div> *
                      </div>

                    </div> */}
            
    </>
  )
}

export default Send;