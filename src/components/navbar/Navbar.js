import Logo from "../Logo";
import Nav from "../Nav";
import styles from '../Layout.module.css'



export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className="container-fluid mx-auto">
        <div className="flex items-center justify-between">

        <Logo/>

        <Nav/>
        </div>
      </div>
    </header>
  )
}
