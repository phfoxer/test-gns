
import { IUser } from '../interfaces';
export class UserService {
  public getUsers = async (): Promise<IUser[]> => {
    const data = await fetch('https://private-847f5-ivangenesis.apiary-mock.com/users').then(response => response.json());
    return Promise.resolve(data)
  }
}
