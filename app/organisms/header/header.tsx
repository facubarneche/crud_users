import CreateButton from "@/app/atoms/button/button";
import styles from "./header.module.css";

interface HeaderProps {
  title: string;
  buttonLabel: string;
  icon: string;
}

export default function Header({ title, buttonLabel, icon }: HeaderProps) {
  return (
    <header className={styles['header']}>
      <h1 className={styles['header-title']}>{ title }</h1>
      <CreateButton label={buttonLabel} icon={icon} />
    </header>
  )
}

