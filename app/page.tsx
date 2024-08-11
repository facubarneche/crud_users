import { userService } from "@/src/services/user.service";

import style from './page.module.css';
import Main from "./organisms/main/main";
import { IUser } from "@/src/domains/user";

export default async function UserPage({ searchParams }: {
    searchParams?: {
      usuario?: string;
      estado?: string;
      sector?: number;
    };
  }) {

    const users: IUser[] = await userService.getAll(searchParams);

    return (
        <div className={style['page-container']}>
            <Main initialUsers={users} />
        </div>
    )
}