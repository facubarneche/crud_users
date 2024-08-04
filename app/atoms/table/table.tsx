
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface User {
    id: number;
    user: string; //TODO: Tipar con la entidad user
    state: string; //TODO: Agregar interface estado
    sector: string; //TODO: Agregar interface sector
}

export default function Table() {
    const products: User[] = [
        {
            id: 1,
            user: 'Facundo',
            state: 'Activo',
            sector: 'IT',
        },
        {
            id: 2,
            user: 'Roberto',
            state: 'Activo',
            sector: 'Administración',
        },
        {
            id: 3,
            user: 'Carlos',
            state: 'Inactivo',
            sector: 'IT',
        }
    ];

    return (
        <div className="card">
            <DataTable value={products} removableSort tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="id" sortable style={{ width: '25%' }}></Column>
                <Column field="user" header="Usuario" sortable style={{ width: '25%'} } bodyStyle={ {color: '#0763E7', textDecoration: 'underline'} }></Column>
                <Column field="state" header="Estado" sortable style={{ width: '25%' }}></Column>
                <Column field="sector" header="Sector" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
