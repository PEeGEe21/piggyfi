import Image from 'next/image';
import styles from './Save.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; 


const Save = () => {
  return (
    <>


<section className={styles.page_section}>

<div className="container w-full">
    <div className="flex flex-col md:flex-row sm:flex-col flex-wrap justify-center align-center  px-4">
      <div className="left-card">
          <div className="text-left pr-[0px] md:pr-[100px] sm:pr-[0px] ">
          <h1 className={styles.heading_title}>
                            Save and earn up to 10% Annual Interest
                            </h1>
                              <p className="mt-3 text-base text-[#000000] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                              PiggyFi allows you to send money to your friends and family within and outside these counties.                              
                              </p>


                              {/* <div className="my-5 py-3">
                              <Link href="/">
                              <a className="w-full items-center justify-start py-3 text-base font-medium text-indigo-600	 md:py-4 ">Start saving</a>
                              </Link>
                            </div> */}
                            <div className={styles.learn_more}>
                              <Link href="/">
                                <a className=" inline-block items-center justify-start py-3 text-base font-medium text-indigo-600	 md:py-4 ">Learn More 
                                  <FontAwesomeIcon style={{fontSize:"12px", marginLeft:'15px'}} icon={faLongArrowAltRight}></FontAwesomeIcon>

                                </a>
                              </Link>
                            </div>

      
          </div>
      </div>
      
      <div className="right-card">

            <div className="outerCard">
            <div className="imgCard">
              {/* <div className="main-img-div"> */}
                <figure className="main-img">
                  <img src="/images/calculator-and-alarm-clock.png" width="100px" height="100%" alt="Your Name" className="img-fluid"
                  />

                </figure>

                {/* </div>   */}

              

                <div className={styles.frame5_imageFloat}>
                  <figure className={styles.group}>
                  <img src="/images/Group 8.svg" width="100px" height="100%" alt="Your Name" className="img-fluid"
                  />
                  </figure>
                  </div>

                  <div className={styles.frame4_imageFloat}>
                  <figure className={styles.rectangle}>
                  <img src="/images/Rectangle 77.svg" width="100px" height="100%" alt="Your Name" className="img-fluid"
                  />
                  </figure>
                  </div>
                
                <div className={styles.frame3_imageFloat}>
                  <figure className={styles.coin}>
                  <img src="/images/coin.svg" width="100px" height="100%" alt="Your Name" className="img-fluid"
                  />
                  </figure>
                  </div>
                

                <div className={styles.frame1_imageFloat} data-animation="heroFloater">
                    <figure className={styles.frame1}>
                      <img src="/images/Frame7.svg" width="100px" height="100%" alt="Your Name" className="img-fluid"
                    />

                    </figure>
                </div>

                <div className={styles.frame2_imageFloat}>

                  <figure className={styles.frame2}>
                    <img src="/images/Frame18.svg" width="100px" height="100%" alt="Your Name" className="img-fluid"
                    />

                    </figure>
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

export default Save;