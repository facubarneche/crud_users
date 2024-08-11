"use client";

import Table from "@/app/atoms/table/table";
import MainHeader from "@/app/molecules/main-header/main-header";
import Searcher from "@/app/molecules/searchers/searcher";
import { userService } from "@/src/services/user.service";
import { useState } from "react";
import ActionModal from "../modal/action-modal";
import { IUser } from "@/src/domains/user";
import CreateButton from "@/app/atoms/button/button";

export default function Main({ initialUsers }: any) {
    const [user, setUser] = useState<any>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [tableUser, setTableUser] = useState<any>(initialUsers);

    const deleteAction = async (data: any) => {
        await userService.delete(data.id);
        setTableUser(tableUser.filter((user: any) => user.id !== data.id));
    }

    //TODO: Cambiar de nombre al boton ActionButton
    const deleteButton = (rowData: any) => <CreateButton style='text-white bg-red-600 border-transparent px-5' icon="pi pi-trash" outlined={false} onClick={() => deleteAction(rowData)} />


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

    const hideModal = () => setModalVisible(false);

    return (
        <div>
            <MainHeader title="Usuarios" buttonLabel="Nuevo Usuario" icon="pi pi-plus" showModal={showModal} />
            <Searcher />
            <Table printUsers={tableUser} showModal={showModal} deleteButton={deleteButton} />
            {
                modalVisible && <ActionModal user={user} createUser={createUser} onClose={hideModal} />
            }
        </div>
    )
}
