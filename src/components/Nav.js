import styles from './Layout.module.css'



export default function Nav({children}) {
  return (
    <>
    <div className="">
                    <nav id="site-navigation" className=" inline">
                        <ul className="menu inline-flex ">
                            <li className={styles.nav_item}><a href="/" className={styles.nav_link}>Products</a>

                            </li>
                            <li className={styles.nav_item}><a href="" className={styles.nav_link}>FAQs</a>
                                
                            </li>
                            <li className={styles.nav_item}><a href="" className={styles.nav_link}>Support</a>
                                
                            </li>
                            <li className={styles.nav_item}><a href="contact.html" className={styles.nav_link}>Contact</a></li>
                            
                        </ul>
                    </nav>
                    </div>
    </>
  )
}

// const styles ={
//     nav_item: {
//         display: 'inline-block',
//     },
//     nav_link: {
//             color: '#ffffff',
//             fontWeight: '500',
//             padding: '39px 10px',
//             display: 'block',
//             fontSize: '16px',
//             transition: 'all .3s ease-out 0s',
//             texttransform: 'capitalize',
//             position: 'relative',
//             margin: '0 23px',
        
//     }

// }
