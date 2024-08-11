import axios from 'axios'
import { IUser } from '../domains/user'

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const DEFAULT_SECTOR_PARAMS = process.env.NEXT_PUBLIC_DEFAULT_SECTOR_PARAMS;
const DEFAULT_PAGE_PARAMS = process.env.NEXT_PUBLIC_DEFAULT_PAGE_PARAMS;


class UserService {
  getAll = async (queryParams: any) => {
    // Se obtiene sector 3000 por defecto o el elegido 
    // Solo para la funcionalidad del searcher. No se interactuó en ningún momento con otros sectores
    const sector = queryParams?.sector ?? DEFAULT_SECTOR_PARAMS;
    const page = queryParams?._page ?? DEFAULT_PAGE_PARAMS;
    const queryString = new URLSearchParams(queryParams);

    return (await axios.get(`${API_URL}/?${sector}&${page}&${queryString.toString()}`)).data;
  }

  getById = async (id: string) => (await axios.get(`${API_URL}/${id}/?${DEFAULT_SECTOR_PARAMS}`)).data;

  create = async (user: IUser) => await axios.post(`${API_URL}?${DEFAULT_SECTOR_PARAMS}`, user);

  update = async (user: IUser, id: string) => await axios.put(`${API_URL}/${id}/?${DEFAULT_SECTOR_PARAMS}`, user);

  delete = async (id: string) => await axios.delete(`${API_URL}/${id}/?${DEFAULT_SECTOR_PARAMS}`);
}

export const userService = new UserService();