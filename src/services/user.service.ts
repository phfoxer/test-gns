import axios from 'axios';
import { IUser } from '../interfaces';
export class UserService {
  public getUsers = async () => {
    const { data } = await axios.get<IUser[]>('https://private-847f5-ivangenesis.apiary-mock.com/users');
    return Promise.resolve(data);
  }
}
