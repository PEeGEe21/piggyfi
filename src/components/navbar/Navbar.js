import Logo from "../Logo";
import Nav from "../Nav";
import { useEffect, useRef, useState } from "react";
import styles from '../Layout.module.css'
import cn from 'classnames'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; 
import Link from "next/link";



export default function Navbar() {

  const [show, setShow ] = useState(null);
  let ref = useRef();
  // window.location.reload();
  const removeMenu = () => {
    setShow(false);

  }

  useEffect(() =>{
    window.addEventListener('scroll', isSticky);
    return () =>{
      window.removeEventListener('scroll', isSticky);
    }
  });

  const isSticky = (e) => {
    const header = document.querySelector('.header');
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky'); 
  }

  // useEffect(()=>{
  //   const handler = (e) => {
  //     if (show && ref.current && !ref.current.contains(e.target)){
  //       setShow(false);

  //     }
  //   };

  //   document.addEventListener("mousedown", handler);
  //   document.addEventListener("touchstart", handler);
  //   return() => {
  //     document.removeEventListener("mousedown", handler);
  //     document.removeEventListener("touchstart", handler);
  //   };
  // }, [show]);

  return (
    <header className={cn("header", [styles.navbar])}>
      <div className="container-fluid mx-auto">
        <div className="header-bar flex items-center justify-between">

        <Logo/>

          <Nav/>

          <div className="menu-btn block sm:block md:block lg:hidden  flex items-center justify-center mr-2">
          <button type="button" className=" flex items-center justify-center p-2 focus:outline-none " aria-controls="mobile-menu" aria-expanded="false" onClick={() => {
            setShow(!show); 
            }} ref={ref}>

              {show? <FontAwesomeIcon style={{fontSize:"25px", color:'#ffffff', textAlign: 'center', display: 'flex', alignItems:'center', justifyContent: 'center', fontWeight:'300'}} icon={faTimes}></FontAwesomeIcon>
            :
            <FontAwesomeIcon style={{fontSize:"25px", color:'#ffffff', textAlign: 'center', display: 'flex', alignItems:'center', justifyContent: 'center', fontWeight:'300'}} icon={faBars}></FontAwesomeIcon>
            }

            


            </button>
          </div>


          <div className={cn("wrapper", {show})}>
            <FontAwesomeIcon className="close-btn" style={{fontSize:"25px", color:'#ffffff', textAlign: 'center', display: 'flex', alignItems:'center', justifyContent: 'center', fontWeight:'300'}} icon={faTimes} onClick={() => {
                    setShow(false)
                }}></FontAwesomeIcon>
            <div>
                <ul>
                  <li>
                  <Link href="/">
                      <a onClick={removeMenu}>Products</a>
                  </Link>
                  </li>
                  <li>
                  <Link href="/">
                      <a onClick={removeMenu}>FAQs</a>
                  </Link>
                  </li>
                  <li>
                  <Link href="/support">
                      <a onClick={removeMenu}>Support</a>
                  </Link>
                  </li>
                </ul>
            </div>

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
