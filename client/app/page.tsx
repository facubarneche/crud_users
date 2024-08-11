import { userService } from "@/src/services/user.service";

import style from './page.module.css';
import Main from "./organisms/main/main";
import { IUser } from "@/src/domains/user";

interface ISearchParams {
  searchParams?: {
    usuario?: string;
    estado?: string;
    sector?: number;
    _page?: number;
    _limit?: number;
  };
}

export default async function UserPage({ searchParams }: ISearchParams) {

    const users: IUser[] = await userService.getAll(searchParams);

    return (
        <div className={style['page-container']}>
            <Main initialUsers={users} />
        </div>
    )
}