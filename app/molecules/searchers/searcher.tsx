"use client";

import styles from "./searcher.module.css";
import { Button } from "primereact/button";
import InputSearch from "@/app/atoms/inputs/input-search/input-search";
import DropdownInput from "@/app/atoms/inputs/dropdown/dropdown";

export default function Searcher() {
    // TODO: Obtener de utils o algo similar
    const state = ['ACTIVO', 'INACTIVO'];
    const sector = [3000, 3001, 3002];

    return (
        <div className={styles['searcher-container']}>
            <InputSearch label='' userData='' placeholder='Buscar' />
            <DropdownInput data={state} placeholder='Estado' />
            <DropdownInput data={sector} placeholder='Sector' />
            <Button className={styles['searcher-button']} icon="pi pi-filter" severity="secondary" />
            <Button className={styles['searcher-button']} icon="pi pi-sliders-v" severity="secondary" />
        </div>
    )
}



