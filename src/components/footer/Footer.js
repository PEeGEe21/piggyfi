import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <>
      <footer className="bg-[#000042]  w-full px-[50px]">
        <div className=" mx-auto container">
          <div className="top-footer py-[120px] px-4 grid  grid-cols-4 gap-8	border-b-[0.5px]	border-[#FFFFFF80] ">
            <div className="col-span-[3] w-full">
              <Image src="/images/Logo.svg" width={150} height={80} alt="ink" />

              <p className={styles.footer_desc}>A DeFi platform that helps you save in stable currencies</p>
            </div>
            <div className="mx-auto">
              <h4 className="footer_menu_heading mb-5 text-[20px] text-zinc-300	" >Products</h4>
              <ul>
                <li className={styles.footer_nav_item}><a href="" className={styles.footer_nav_link}>Send & Recieve</a></li>
                <li className={styles.footer_nav_item}><a href="" className={styles.footer_nav_link}>piggyfi for Business</a></li>
                <li className={styles.footer_nav_item}><a href="" className={styles.footer_nav_link}>Save & Earn</a></li>
              </ul>
            </div>

            <div className="flex justify-between">

              <div>
              <h4 className="footer_menu_heading mb-5 text-[20px] text-zinc-300	" >Company</h4>
                <ul>
                  <li className={styles.footer_nav_item}><a href="" className={styles.footer_nav_link}>FaQs</a></li>
                  <li className={styles.footer_nav_item}><a href="" className={styles.footer_nav_link}>How it works</a></li>
                  <li className={styles.footer_nav_item}><a href="" className={styles.footer_nav_link}>lorem ipsum</a></li>
                </ul>

              </div>
              <div className="	">
              <h4 className="footer_menu_heading mb-5 text-[20px] text-zinc-300	" >Legal</h4>
                <ul>
                <li className={styles.footer_nav_item}><a href="" className={styles.footer_nav_link}>Terms of Service</a></li>
                <li className={styles.footer_nav_item}><a href="" className={styles.footer_nav_link}>Privacy Policy</a></li>
                <li className={styles.footer_nav_item}><a href="" className={styles.footer_nav_link}>Cookie Policy</a></li>
                  </ul>
                </div>
            </div>
            
            <div className="mx-auto">
            <h4 className="footer_menu_heading mb-5 text-[20px] text-zinc-300	" >Contact Us</h4>
            <ul>

                  <li className={styles.footer_nav_item}><a href="" className={styles.footer_nav_link}>Piggyfi@gmail.com</a></li>
                  <li className={styles.footer_nav_item}><a href="" className={styles.footer_nav_link}>lorem ipsum</a></li>
                  <li className={styles.footer_nav_item}><a href="" className={styles.footer_nav_link}>lorem ipsum</a></li>
              </ul>
            </div>

          </div>

          <div className="bottom-footer py-[40px] text-center text-white justify-center items-center">

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PiggyFi © {currentYear}. All rights reserved
              {/* <span>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span> */}
            </a>
          </div>

        </div>
      </footer>
    
    </>
  )
}
