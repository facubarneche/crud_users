import { userService } from "@/src/services/user.service";

import style from './page.module.css';
import MainHeader from "./organisms/main-header/main-header";
import Searcher from "./molecules/searchers/searcher";
import Table from "./atoms/table/table";
import BasicPaginator from "./atoms/paginator/paginator";

export default async function UserPage() {
    //TODO: Ver el any
    const users: any[] = await userService.getAll();

    return (
        <div className={style['page-container']}>
            <MainHeader title="Usuarios" buttonLabel="Nuevo Usuario" icon="pi pi-plus"/>
            <Searcher />
            <Table initialUsers={users} />
            <BasicPaginator />
        </div>
    )
}