import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

import styles from "./input-search.module.css";

interface InputSearchProps {
  label: string | null;
};

export default function InputSearch({ label }: InputSearchProps) {
  return (
    <div>
      <label>{label}</label>
      <IconField  className={styles['searcher-input-container']} iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText className={styles['searcher-input']} v-model="value1" placeholder="Buscar" />
      </IconField>
    </div>
  )
}
