import axios from 'axios'
import { API_URL } from '../config'
import { IUser, User } from '../domains/user'

class UserService {
  getAll = async () => {
    return (await axios.get(`${API_URL}`)).data;
    // return usersJson.data.map((user: IUser) => User.fromJson(user))
  }

  // delete = async (id) => {
  //   try {
  //     const response$ = await axios.delete(`${API_URL}/punto-de-venta/${id}/eliminar`)
  //     console.log('Elemento eliminado correctamente', response$.data)
  //   } catch (err) {
  //     HandleError(err)
  //   }
  // }

  // create = async (market) => {
  //   try {
  //     const MarketJSON = Market.toJson(market)
  //     const response = await axios.post(`${API_URL}/punto-de-venta/nuevo`, MarketJSON)
  //     console.log('Market created successfully', response.data)
  //   } catch (err) {
  //     HandleError(err)
  //   }
  // }

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