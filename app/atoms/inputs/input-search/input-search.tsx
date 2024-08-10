"use client";
import React, { useState } from "react";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import styles from "./input-search.module.css";

interface InputSearchProps {
  label: string | null;
  userData: string | null;
  placeholder: string;
  name: string
};

export default function InputSearch({ label, userData, placeholder, name }: InputSearchProps) {
  const [value, setValue] = useState<string | null>(userData);

  return (
    <div>
      <label>{label}</label>
      <IconField className={styles['searcher-input-container']} iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          className={styles['searcher-input']}
          value={value || ''}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          name={name}
        />
      </IconField>
    </div>
  )
}
