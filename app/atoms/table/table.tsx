"use client";

import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

//TODO: Ver el any
export default function Table({ printUsers, showModal, deleteButton }: any) {
    return (
        <div>
            <DataTable value={printUsers} removableSort rowHover tableStyle={{ minWidth: '50rem', height: '20px', cursor: 'pointer' }} onRowClick={showModal}>
                <Column field="id" header="id" sortable style={{ width: '25%' }} />
                <Column field="usuario" header="Usuario" sortable style={{ width: '25%' }} bodyStyle={{ color: '#0763E7', textDecoration: 'underline' }} />
                <Column field="estado" header="Estado" sortable style={{ width: '25%' }} />
                <Column field="sector" header="Sector" sortable style={{ width: '25%' }} />
                <Column header="Eliminar" body={deleteButton} style={{ width: '25%' }} />
            </DataTable>
        </div>
    );
}
