
"use client";
import React, { useState } from "react";

import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import styles from "./dropdown.module.css";

export default function DropdownInput({ data, placeholder, label }: any) {
  const [selectedData, setSelectedData] = useState<any | null>(null);

  return (
    <div>
      <label>{label}</label>
      <Dropdown
        className={styles['dropdown']}
        value={selectedData}
        onChange={(e: DropdownChangeEvent) => setSelectedData(e.value)}
        options={data}
        optionLabel="name"
        placeholder={`Seleccionar el ${placeholder}`}
        checkmark={true}
        highlightOnSelect={false}
      />
    </div>
  )
}
