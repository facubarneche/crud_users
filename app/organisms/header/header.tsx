import CreateButton from "@/app/atoms/button/button";
import styles from "./header.module.css";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className={styles['header']}>
      <h1 className={styles['header-title']}>{ title }</h1>
      <CreateButton label="Nuevos Usuarios" icon="pi pi-check" />
    </header>
  )
}

