import Table from "@/app/atoms/table/table";
import Searcher from "@/app/molecules/searchers/searcher";
import MainHeader from "@/app/organisms/main-header/main-header";

import style from "./user.module.css";
import BasicPaginator from "@/app/atoms/paginator/paginator";
import { GetServerSideProps } from "next";
import { userService } from "@/src/services/user.service";
import axios from "axios";
import { API_URL } from "@/src/config";
import { IUser } from "@/src/domains/user";

export default async function UserPage() {
    //TODO: Ver el any
    const users: any[] = await userService.getAll();

    return (
        <div className={style['page-container']}>
            <MainHeader title="Usuarios" buttonLabel="Nuevo Usuario" icon="pi pi-plus"/>
            <Searcher />
            <Table users={users} />
            <BasicPaginator />
        </div>
    )
}