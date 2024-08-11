"use client";

import { Suspense, useEffect, useState } from "react";

import { userService } from "@/src/services/user.service";
import { IUser } from "@/src/domains/user";
import Table from "@/app/atoms/table/table";
import MainHeader from "@/app/molecules/main-header/main-header";
import Searcher from "@/app/molecules/searchers/searcher";
import CreateButton from "@/app/atoms/button/button";
import BasicPaginator from "@/app/atoms/paginator/paginator";
import ActionModal from "../modal/action-modal";
import Spin from "@/app/atoms/spinner/spinner";

export default function Main({ initialUsers }: any) {
    const [user, setUser] = useState<any>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [tableUser, setTableUser] = useState<IUser[]>(initialUsers);

    // Sincronizamos tableUser con initialUsers para asegurar integridad de datos después del re-render.
    useEffect(() => {
        setTableUser(initialUsers);
    }, [initialUsers]);

    const deleteAction = async (data: any) => {
        await userService.delete(data.id);
        setTableUser(tableUser.filter((user: any) => user.id !== data.id));
    }

    const actionButton = (rowData: any) => <CreateButton style='text-white bg-red-600 border-transparent px-5' icon="pi pi-trash" outlined={false} onClick={() => deleteAction(rowData)} />


    const createUser = (user: IUser) => {
        const users = tableUser.filter((u: IUser) => u.id !== user.id);
        setTableUser([user, ...users]);
    }

    const showModal = async (data: any) => {
        const dataUser = data?.data ?? null;

        if (dataUser) {
            const user = await userService.getById(dataUser.id);
            setUser(user);
        }
        setModalVisible(true);
    }

    const hideModal = () => {
        setUser(null);
        setModalVisible(false);
    }

    return (
        <div>
            <MainHeader title="Usuarios" buttonLabel="Nuevo Usuario" icon="pi pi-plus" showModal={showModal} />
            <Searcher />
            <Suspense fallback={<Spin />}>
                <Table printUsers={tableUser} showModal={showModal} actionButton={actionButton} />
            </Suspense>
            <BasicPaginator />

            {
                modalVisible && <ActionModal user={user} createUser={createUser} onClose={hideModal} />
            }
        </div>
    )
}
