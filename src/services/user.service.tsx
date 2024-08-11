import axios from 'axios'
import { IUser } from '../domains/user'

const {DEFAULT_SECTOR_PARAMS, API_URL} = process.env;
class UserService {
  getAll = async (queryParams: any) => {
    // Se obtiene sector 3000 por defecto o el elegido 
    // Solo para la funcionalidad del searcher. No se interactuó en ningún momento con otros sectores
    const sector = queryParams?.sector ?? DEFAULT_SECTOR_PARAMS;
    
    const queryString = new URLSearchParams(queryParams);
    return (await axios.get(`${API_URL}/?${sector}&${queryString.toString()}&_limit=10&_page=1`)).data;
  }

  getById = async (id: string) => (await axios.get(`${API_URL}/${id}/?${DEFAULT_SECTOR_PARAMS}`)).data;

  create = async (user: IUser) => await axios.post(`${API_URL}?${DEFAULT_SECTOR_PARAMS}`, user);

  update = async (user: IUser, id: string) => await axios.put(`${API_URL}/${id}/?${DEFAULT_SECTOR_PARAMS}`, user);

  delete = async (id: string) => await axios.delete(`${API_URL}/${id}/?${DEFAULT_SECTOR_PARAMS}`);
}

export const userService = new UserService();