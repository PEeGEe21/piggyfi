import styles from './Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <>

        <div className={styles.hero}>


            <div className="container w-full">
                <main className="sm:px-8 px-[10px]   ">
                    <div className="pt-24 pb-24 mx-auto  flex flex-col md:flex-row sm:flex-col   px-4 ">
                    <div className="flex-1">
                        <div className="text-left">
                        <h1 className={styles.heading_title}>
                            A smart way to save money across Africa
                        </h1>
                        <p className="mt-3 mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
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
