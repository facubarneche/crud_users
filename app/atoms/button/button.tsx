import React, { useState } from 'react';
import { Button } from 'primereact/button';
import styles from './button.module.css';

interface CreateButtonProps {
    label?: string;
    icon: string;
    outlined: boolean;
    style?: string;
    onClick: () => void;
}

export default function CreateButton({ label, icon, outlined, style, onClick }: CreateButtonProps) {
    const load = () => onClick();

    return <Button
        className={`${styles['create-button']} ${style}`}
        label={label}
        icon={icon}
        onClick={load}
        outlined={outlined}
    />
}
