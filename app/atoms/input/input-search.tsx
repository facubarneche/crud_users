import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

import styles from "./input-search.module.css";

export default function InputSearch() {
  return (
    <IconField iconPosition="left">
    <InputIcon className="pi pi-search" />
    <InputText className={styles['searcher-input']} v-model="value1" placeholder="Buscar" />
</IconField>
  )
}
