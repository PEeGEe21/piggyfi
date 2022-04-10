import styles from './Receive.module.css'
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; 


const Receive = () => {
  return (
    <>


<section className={styles.page_section}>

<div className="container w-full">
    <div className="flex flex-col flex-col-reverse sm:flex-col-reverse md:flex-row sm:flex-col flex-wrap justify-center align-center  px-4">
      <div className="left-card">
      <div className="imgCard">
              <figure>
                <img src="/images/receive_img.png" width="100px" height="100%" alt="Your Name" className="img-fluid"
                />

                </figure>
                
              </div>
      </div>
      
      <div className="right-card">
      <div className="">
                      <div className="text-left sm:pl-[100px] pl-[0]">
                            <h1 className={styles.heading_title}>
                            Receive money from anywhere                             
                            </h1>
                              <p className="mt-3 max-w-md mx-auto text-base text-[#000000] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                              PiggyFi allows you to send money to your friends and family within and outside these counties.
                              </p>


                              {/* <div className="my-5 py-3">
                              <Link href="">
                              <a className="items-center justify-start py-3 text-base font-medium text-indigo-600 md:py-4 ">Learn More</a>
                              </Link>
                            </div> */}
                            <div className="my-2 py-3 flex items-center learn-more w-auto ">
                              <Link href="">
                                <a className="inline-block items-center justify-start py-3 text-base font-medium text-indigo-600	 md:py-4 ">Learn More 
                                <FontAwesomeIcon style={{fontSize:"12px", marginLeft:'15px'}} icon={faLongArrowAltRight}></FontAwesomeIcon>

                              </a>
                              </Link>
                              </div>




                        


                          </div>
                          
                      </div>
            
      </div>
        
    </div>
</div>
</section>




    </>
  )
}

export default Receive;