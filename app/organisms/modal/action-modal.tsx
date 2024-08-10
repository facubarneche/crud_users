import { Dialog } from 'primereact/dialog';
import Header from '../header/header';
import Form from '../form/form';

interface ActionModalProps {
    visible: boolean;
    user: any;
    onClose: () => void;
}


export default function ActionModal({ visible, user, onClose }: ActionModalProps) {

    return (
        <Dialog
            header={<Header title="Usuario" />}
            visible={visible}
            closeIcon={<i className="pi pi-minus" style={{ color: '#FFFFFF' }} />}
            onHide={onClose}
            style={{ width: '60vw', minHeight: '50vh' }}
            headerStyle={{ background: "#0763E7", height: '4.9rem' }}
            contentStyle={{ padding: '1em' }}
            closeOnEscape={false}
        >
            <Form user={user} onClose={onClose}/>
        </Dialog>
    );
}
