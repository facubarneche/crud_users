"use client";

import CreateButton from "@/app/atoms/button/button";
import styles from "./main-header.module.css";
import ActionModal from "../modal/action-modal";
import { useState } from "react";

interface MainHeaderProps {
  title: string;
  buttonLabel: string;
  icon: string;
}

export default function MainHeader({ title, buttonLabel, icon }: MainHeaderProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);

  const hideModal = () => setModalVisible(false);

  return (
    <header className={styles['main-header']}>
      <h1 className={styles['main-header-title']}>{title}</h1>
      <CreateButton label={buttonLabel} icon={icon} outlined={false} onClick={showModal} />
      <ActionModal visible={modalVisible} user="" onClose={hideModal} />
    </header>
  )
}

