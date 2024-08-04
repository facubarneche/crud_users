// ActionModal.tsx
import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import CreateButton from '@/app/atoms/button/button';
import Header from '../header/header';
import styles from './action-modal.module.css';
import InputSearch from '@/app/atoms/inputs/input-search/input-search';
import DropdownInput from '@/app/atoms/inputs/dropdown/dropdown';

interface ActionModalProps {
    visible: boolean;
    onClose: () => void;
}

export default function ActionModal({ visible, onClose }: ActionModalProps) {
    const footerContent = (
        <div className={styles['modal-footer']} >
            <CreateButton label="Confirmar" icon="pi pi-check" outlined={false} onClick={onClose} />
            <CreateButton label="Cancelar" icon="pi pi-times" outlined={true} onClick={onClose} />
        </div>
    );
    const state = ['Activo', 'Inactivo'];
    const sector = ['IT', 'Marketing', 'Administración'];
    return (
        <Dialog
            header={<Header title="Usuario" />}
            visible={visible}
            closeIcon={<i className="pi pi-minus" style={{ color: '#FFFFFF' }} />}
            onHide={onClose}
            footer={footerContent}
            style={{ width: '50vw', height: '65vh' }}
            headerStyle={{ background: "#0763E7", height: '4.9rem' }}
            contentStyle={{ padding: '1em' }}
        >
            <form className={styles['modal-form']}>
                <InputSearch label='id' />
                <InputSearch label='Nombre' />
                <DropdownInput data={state} placeholder='Estado' label='Estado'/>
                <DropdownInput data={sector} placeholder='Sector' label='Sector' />
            </form>
        </Dialog>
    );
}
