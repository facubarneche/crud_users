"use client";

import ActionModal from '@/app/organisms/modal/action-modal';
import { userService } from '@/src/services/user.service';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useState } from 'react';
import CreateButton from '../button/button';

//TODO: Ver el any
export default function Table({ initialUsers }: any) {
    const [modalVisible, setModalVisible] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [tableUser, setTableUser] = useState<any>(initialUsers);    

    const showModal = async({ data }: any) => {
        const user = await userService.getById(data.id);
        setUser(user);
        setModalVisible(true);
    }

    const deleteAction = async (data: any) => {
        setTableUser(tableUser.filter((user: any) => user.id !== data.id));
        await userService.delete(data.id);
    }
    

    const hideModal = () => setModalVisible(false);

    //TODO: Cambiar de nombre al boton ActionButton
    const deleteButton = (rowData: any) =>  <CreateButton label="Borrar" action='delete' icon="pi pi-trash" outlined={false} onClick={() => deleteAction(rowData)} />
        
    return (
        <div>
            <DataTable value={tableUser} removableSort tableStyle={{ minWidth: '50rem', height: '20px' }} onRowClick={showModal}>
                <Column field="id" header="id" sortable style={{ width: '25%' }} />
                <Column field="usuario" header="Usuario" sortable style={{ width: '25%' }} bodyStyle={{ color: '#0763E7', textDecoration: 'underline' }} />
                <Column field="estado" header="Estado" sortable style={{ width: '25%' }} />
                <Column field="sector" header="Sector" sortable style={{ width: '25%' }} />
                <Column header="Eliminar" body={deleteButton} style={{ width: '25%' }} />
            </DataTable>

            <ActionModal visible={modalVisible} user={user} onClose={hideModal} />
        </div>
    );
}
