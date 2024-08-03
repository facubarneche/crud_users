"use client";
import React, { useState } from "react";

import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import styles from "./searcher.module.css";
import { Button } from "primereact/button";
import InputSearch from "@/app/atoms/input/input-search";


export default function Searcher() {

    interface City {
        name: string;
        code: string;
    }
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
        <div className={styles['searcher-container']}>
            <InputSearch />
            {/* TODO: Atomizar */}
            <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                placeholder="Seleccionar el Estado" checkmark={true} highlightOnSelect={false} />
            <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                placeholder="Seleccionar el Sector" checkmark={true} highlightOnSelect={false} />
            <Button className={styles['searcher-button']} icon="pi pi-filter" severity="secondary" />
            <Button className={styles['searcher-button']} icon="pi pi-sliders-v" severity="secondary" />
        </div>
    )
}



