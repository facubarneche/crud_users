"use client";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IUser } from '@/src/domains/user';
import { useEffect, useState } from 'react';
import ActionModal from '@/app/organisms/modal/action-modal';
import { userService } from '@/src/services/user.service';

//TODO: Ver el any
export default function Table({ users }: any) {
    const [modalVisible, setModalVisible] = useState(false);
    const [user, setUser] = useState<any>(null);

    const showModal = async({ data }: any) => {
        const user = await userService.getById(data.id);
        setUser(user);
        setModalVisible(true);
    }

    const hideModal = () => setModalVisible(false);

    return (
        <div>
            <DataTable value={users} removableSort tableStyle={{ minWidth: '50rem' }} onRowClick={showModal}>
                <Column field="id" header="id" sortable style={{ width: '25%' }} />
                <Column field="usuario" header="Usuario" sortable style={{ width: '25%' }} bodyStyle={{ color: '#0763E7', textDecoration: 'underline' }} />
                <Column field="estado" header="Estado" sortable style={{ width: '25%' }} />
                <Column field="sector" header="Sector" sortable style={{ width: '25%' }} />
            </DataTable>
            {/* TODO: Refactorizar se repite en main-header */}
            <ActionModal visible={modalVisible} user={user} onClose={hideModal} />
        </div>
    );
}
