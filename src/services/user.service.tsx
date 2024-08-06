import axios from 'axios'
import { API_URL } from '../config'
import { IUser, User } from '../domains/user'

class UserService {
  getAll = async () => (await axios.get(`${API_URL}?sector=3000&_limit=10&_page=1`)).data;

  getById = async (id: number) => (await axios.get(`${API_URL}/${id}`)).data;

  create = async (user: IUser) => await axios.post(API_URL, user);

  delete = async (id: number) => await axios.delete(`${API_URL}/${id}`);
  


  // update = async (market) => {
  //   try {
  //     const MarketJSON = Market.toJson(market)
  //     console.log('editado', market.id)
  //     const response = await axios.put(`${API_URL}/punto-de-venta/editar`, MarketJSON)
  //     console.log('Market updated successfully', response.data)
  //   } catch (err) {
  //     HandleError(err)
  //   }
  // }
}


export const userService = new UserService();