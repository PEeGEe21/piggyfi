import Logo from "../Logo";
import Nav from "../Nav";
import styles from '../Layout.module.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars } from "@fortawesome/free-solid-svg-icons"; 
import Link from "next/link";



export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className="container-fluid mx-auto">
        <div className="flex items-center justify-between">

        <Logo/>

          <Nav/>

          <div className="sm:block md:block lg:hidden block flex items-center justify-center mr-2">
          <button type="button" className="flex items-center justify-center p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">

            <FontAwesomeIcon style={{fontSize:"25px", color:'#ffffff', textAlign: 'center', display: 'flex', alignItems:'center', justifyContent: 'center', fontWeight:'300'}} icon={faBars}></FontAwesomeIcon>
            </button>
          </div>

<div className="mobile_nav_wrapper hidden">
          <div className="mobile_menu_container">
            <ul>
              <li>
                <Link href="">
                <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="">
                <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="">
                <a>Home</a>
                </Link>
              </li>
            </ul>
          </div>
          </div>
          {/* <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </div>
            </div> */}
        </div>
      </div>
    </header>
  )
}
