"use client";

import React, { useEffect, useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

import style from './paginator.module.css';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TOTAL_RECORDS = 100;

export default function BasicPaginator() {
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const onPageChange = ({ first, rows, page, pageCount }: PaginatorPageChangeEvent) => {
        const params = new URLSearchParams(searchParams);
        setFirst(first);
        setRows(rows);

        params.set('_page', String(page + 1))
        params.set('_limit', String(rows))

        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className={style['paginator-container']}>
            <Paginator first={first} rows={rows} totalRecords={TOTAL_RECORDS} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        </div>
    );
}
