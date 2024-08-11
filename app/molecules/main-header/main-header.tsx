"use client";

import CreateButton from "@/app/atoms/button/button";
import styles from "./main-header.module.css";
import ActionModal from "../../organisms/modal/action-modal";
import { useState } from "react";

// interface MainHeaderProps {
//   title: string;
//   buttonLabel: string;
//   icon: string;
//   showModal: () => void;
// }

export default function MainHeader({ title, buttonLabel, icon, showModal }: any) {
  return (
    <header className={styles['main-header']}>
      <h1 className={styles['main-header-title']}>{title}</h1>
      <CreateButton label={buttonLabel} icon={icon} outlined={false} style="text-white bg-blue-600" onClick={showModal} />      
    </header>
  )
}

