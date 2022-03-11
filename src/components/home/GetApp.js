import styles from './GetApp.module.css'
import Image from 'next/image';
import PhoneIcon from '../getAppIcon';

const GetApp = () => {
  return (
    <>
      <section className={styles.page_section}>
      <div className="container w-full ">
                    <div className="pt-[15] pb-[15] mx-auto flex flex-row px-4 justify-center items-center ">
                    <div className={styles.imgCard}>


{/* <div className="relative"> */}
<Image src="/images/Phone11-pro-back.svg" width={200} height="100%" objectFit="contain" layout="fill" />
    
</div>
                      <div className="flex-1 ">
                        
                          <div className="text-left pr-[80px]">

                            <h1 className={styles.heading_title}>
                            Get the PiggyFi app
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-base text-[#000000] sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Be among the millions of users who would be able to conveniently send and save money  
                            </p>


                            <div className="mt-5 max-w-md  sm:flex sm:justify-start md:mt-8">
                              <div className="rounded-md shadow">
                                <a href="" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:px-10">
                                    Coming soon
                                </a>
                              </div>

                              {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                              <a href="" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 md:py-4 md:text-lg md:px-10">Join Us</a>
                              </div> */}

                            </div>



                        


                          </div>
                      </div>

                     

                    </div>
            </div>
                </section>
    </>
  )
}

export default GetApp;