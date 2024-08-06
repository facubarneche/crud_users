import React, { useState } from 'react';
import { Button } from 'primereact/button';
import styles from './button.module.css';

interface CreateButtonProps {
    label: string;
    icon: string;
    outlined: boolean;
    action?: string;
    onClick: () => void;
}

export default function CreateButton({ label, icon, outlined, action, onClick }: CreateButtonProps) {
    const load = () => onClick();

    return <Button
    className={`${styles['create-button']} ${action === 'new' ? styles['new'] : styles['delete']}`}
        label={label}
        icon={icon}
        onClick={load}
        outlined={outlined}
    />
}
