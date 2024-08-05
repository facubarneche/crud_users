import { Dialog } from 'primereact/dialog';
import CreateButton from '@/app/atoms/button/button';
import Header from '../header/header';
import styles from './action-modal.module.css';
import InputSearch from '@/app/atoms/inputs/input-search/input-search';
import DropdownInput from '@/app/atoms/inputs/dropdown/dropdown';

interface ActionModalProps {
    visible: boolean;
    user: any;
    onClose: () => void;
}

export default function ActionModal({ visible, user, onClose }: ActionModalProps) {
    const state = ['ACTIVO', 'INACTIVO'];
    const sector = [3000, 3001, 3002];
   
    const footerContent = (
        <div className={styles['modal-footer']} >
            <CreateButton label="Confirmar" icon="pi pi-check" outlined={false} onClick={onClose} />
            <CreateButton label="Cancelar" icon="pi pi-times" outlined={true} onClick={onClose} />
        </div>
    );

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
                <InputSearch userData={user?.id} label='id' placeholder='Ingrese el id del usuario'/>
                <InputSearch userData={user?.usuario} label='Nombre' placeholder='Ingrese el nombre del usuario'/>
                <DropdownInput data={state} userData={user?.estado} placeholder='Estado' label='Estado'/>
                <DropdownInput data={sector} userData={user?.sector} placeholder='Sector' label='Sector' />
            </form>
        </Dialog>
    );
}
