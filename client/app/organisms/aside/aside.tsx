import styles from "./aside.module.css";

export default function Aside() {
  const settings = [
    { icon: "pi pi-box", label: "Setting 1" },
    { icon: "pi pi-box", label: "Setting 2" },
    { icon: "pi pi-box", label: "Setting 3" },
    { icon: "pi pi-box", label: "Setting 4" },
    { icon: "pi pi-box", label: "Setting 5" },
    { icon: "pi pi-box", label: "Setting 6" },
  ];

  return (
    <aside className={styles['aside']}>
      {
        settings.map((settings, index) => (
          <span key={index} className={styles['aside-setting']}>
            <i className={settings.icon}></i>
          </span>
        ))
      }
    </aside>
  )
}

