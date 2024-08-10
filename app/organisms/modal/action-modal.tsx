import { Dialog } from 'primereact/dialog';
import Header from '../header/header';
import Form from '../form/form';
import { IUser } from '@/src/domains/user';

interface ActionModalProps {
    user: any;
    createUser: (user: IUser) => void;
    onClose: () => void;
}


export default function ActionModal({ user, createUser, onClose }: ActionModalProps) {

    return (
        <Dialog
            header={<Header title="Usuario" />}
            visible={true}
            closeIcon={<i className="pi pi-minus" style={{ color: '#FFFFFF' }} />}
            onHide={onClose}
            style={{ width: '60vw', minHeight: '50vh' }}
            headerStyle={{ background: "#0763E7", height: '4.9rem' }}
            contentStyle={{ padding: '1em' }}
            closeOnEscape={false}
        >
            <Form user={user} createUser={createUser} onClose={onClose} />
        </Dialog>
    );
}
