import { userService } from "@/src/services/user.service";

import style from './page.module.css';
import BasicPaginator from "./atoms/paginator/paginator";
import Main from "./organisms/main/main";

export default async function UserPage() {
    //TODO: Ver el any
    const users: any[] = await userService.getAll();

    return (
        <div className={style['page-container']}>
            <Main initialUsers={users}/>
            <BasicPaginator />
        </div>
    )
}