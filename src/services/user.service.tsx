import axios from 'axios'
import { API_URL } from '../config'
import { IUser, User } from '../domains/user'

class UserService {
  getAll = async () => (await axios.get(`${API_URL}?sector=3000&_limit=10&_page=1`)).data;

  getById = async (id: number) => (await axios.get(`${API_URL}/${id}`)).data;

  create = async (user: IUser) => await axios.post(API_URL, user);

  update = async (user: IUser, id: string) => await axios.put(`${API_URL}/${id}`, user);

  delete = async (id: number) => await axios.delete(`${API_URL}/${id}`);
}


export const userService = new UserService();