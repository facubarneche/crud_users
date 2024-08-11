// Core
import { PrimeReactProvider } from 'primereact/api';

// Styles
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./globals.css";
import styles from "./layout.module.css"

// Organisms
import Header from "./organisms/header/header";
import Aside from "./organisms/aside/aside";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
      <PrimeReactProvider>
        <Header title="" />
        <div className={styles['wrapper-content']}>
          <Aside />
          <main className={styles['main-content']}>{children}</main>
        </div>
      </PrimeReactProvider>
      </body>
    </html>
  );
}
