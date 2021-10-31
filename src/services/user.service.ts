
import { IUser } from '../interfaces';
export class UserService {
  private storeKey = 'users';
  public getUsers = async (): Promise<IUser[]> => {
    const data = await fetch('https://private-847f5-ivangenesis.apiary-mock.com/users')
      .then(response => response.json())
      .then(response => {
        const store = localStorage.getItem(this.storeKey);
        if (store) {
          const users: IUser[] = JSON.parse(store) || [];
          console.log('users',users);
          response = [...response, ...users].filter(r => r);
        }
        return response;
      })

      ;
    return Promise.resolve(data)
  }

  public addUser = (user: IUser): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      const store = localStorage.getItem(this.storeKey);
      if (store) {
        const users: IUser[] = JSON.parse(store) || [];
        users.push(user);
        localStorage.setItem(this.storeKey, JSON.stringify(users));
        resolve(true)
      }
      if (!store) {
        localStorage.setItem(this.storeKey, JSON.stringify([user]));
        resolve(true)
      }
    })
  }


}
