import Image from "next/image"
import styles from "./header.module.css";

interface HeaderProps {
  title: string | null;
}

export default function Header({ title }: HeaderProps) {
  return (
    <nav className={styles['header']}>
      {
        title ? <h1 className={styles['header-title']}>{title}</h1> : <Image src="/logo.png" width={44} height={43} alt="Logotipo" />
      }
      <button className={styles['header-setting']}>
        <i className="pi pi-cog"></i>
      </button>
    </nav>
  )
}

