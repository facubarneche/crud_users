import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IUser } from '@/src/domains/user';

//TODO: Ver el any
export default function Table({ users }: any) {
    return (
        <DataTable value={users} removableSort tableStyle={{ minWidth: '50rem' }}>
            <Column field="id" header="id" sortable style={{ width: '25%' }}></Column>
            <Column field="usuario" header="Usuario" sortable style={{ width: '25%' }} bodyStyle={{ color: '#0763E7', textDecoration: 'underline' }}></Column>
            <Column field="estado" header="Estado" sortable style={{ width: '25%' }}></Column>
            <Column field="sector" header="Sector" sortable style={{ width: '25%' }}></Column>
        </DataTable>
    );
}
