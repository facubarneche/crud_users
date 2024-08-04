import Table from "@/app/atoms/table/table";
import Searcher from "@/app/molecules/searchers/searcher";
import Header from "@/app/organisms/header/header";

import style from "./user.module.css";
import BasicPaginator from "@/app/atoms/paginator/paginator";

export default function UserPage() {
    return (
        <div className={style['page-container']}>
            <Header title="Usuarios" buttonLabel="Nuevo Usuario" icon="pi pi-plus"/>
            <Searcher />
            <Table />
            <BasicPaginator />
        </div>
    )
}
