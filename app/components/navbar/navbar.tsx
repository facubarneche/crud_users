import Image from "next/image"
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles['navbar']}>
      <Image
        src="/logo.png"
        width={44}
        height={43}
        alt="Logotipo"
      ></Image>
      <span className={styles['navbar-setting']}>
        <i className="pi pi-cog"></i>
      </span>
    </nav>
  )
}

