"use client";

import { useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";

import styles from "./searcher.module.css";

interface ISearcher {
    usuario: string;
    estado: string;
    sector: string;
}

export default function Searcher() {
    const [searchData, setSearchData] = useState<ISearcher>({usuario:'', estado:'', sector:''});
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    //TODO: Pasar a utils
    // Opciones para los Dropdowns
    const estados = ['ACTIVO', 'INACTIVO'];
    const sectores = [3000, 4000, 5000];

    /**
     * Maneja cambios de los inputs 
     * @param {target: { id: string, value: string }} target id y valor del input modificado 
     */
    const handleInputChange = ( { target }: { target: { id: string, value: string } }) => {
        const { id, value } = target;
        setSearchData(prevState => ({ ...prevState, [id]: value }));
    };

    /**
     * Genera el request a la ruta actual y los nuevos parametros solicitados
     */
    const handleSearch = () => {
        const params = new URLSearchParams(searchParams);

        // Iteramos sobre las keys y values de searchData
        Object.entries(searchData).forEach(([key, value]) => {
            value ? params.set(key, value) : params.delete(key);
        });
        replace(`${pathname}?${params.toString()}`);
    };
    
    /**
     * Limpieza de filtros y se re-render ruta sin parametros
     */
    const cleanStates = () => {
        setSearchData({ usuario:'', estado:'', sector:'' });
        replace(`${pathname}`);
    }
    
    return (
        <form className={styles['searcher-container']} onSubmit={(e) => e.preventDefault()}>
            <div>
                <IconField className={styles['searcher-input-container']} iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText
                        className={styles['searcher-input']}
                        placeholder='Buscar'
                        id="usuario"
                        value={searchData.usuario}
                        onChange={handleInputChange}
                    />
                </IconField>
            </div>
            <div className={styles['searcher-input-container']}>
                <Dropdown
                    className={styles['dropdown']}
                    options={estados}
                    placeholder='Seleccionar el Estado'
                    id="estado"
                    value={searchData.estado}
                    onChange={(e) => {
                        handleInputChange({ target: { id: 'estado', value: e.value } });
                    }}
                />
            </div>
            <div className={styles['searcher-input-container']}>
                <Dropdown
                    className={styles['dropdown']}
                    options={sectores}
                    placeholder='Seleccionar el Sector'
                    id="sector"
                    value={searchData.sector}
                    onChange={(e) => {
                        handleInputChange({ target: { id: 'sector', value: e.value } });
                    }}
                />
            </div>
            <Button
                className={styles['searcher-button']}
                icon="pi pi-filter"
                severity="secondary"
                onClick={handleSearch}
            />
            <Button className={styles['searcher-button']} icon="pi pi-sliders-v" severity="secondary" onClick={cleanStates}/>
        </form>
    )
}
