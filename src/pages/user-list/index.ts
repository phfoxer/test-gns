import { IUser } from 'src/interfaces';
import { UserService } from '../../services/user.service';
import styles from './userlist.styles.scss';
// Components
import '../../components/button';
import '../../components/loader';
import { Page } from '..';

class UserList implements Page {
  private userService: UserService;
  private columns: string[] = ['Nome completo', 'CPF', 'Telefone', 'Email'];

  constructor() {
    this.userService = new UserService();
  }

  public cadastrar = () => {
    alert(5)
  }

  public render = () => {
    const content = document.createElement('template');
    content.innerHTML = `
      <style>${styles}</style>
      <gns-button label="Novo usuário" id="cadastrar"></gns-button>
      <table>
        <thead>
            <tr>
              ${this.columns.map(colunm => `<th>${colunm}</th>`).join('')}
            </tr>
        </thead>
        <tbody id="userList"></body>
      </table>
    `;

    document.addEventListener('DOMContentLoaded', () => {
      this.userService.getUsers().then((users: IUser[]) => {
        document.getElementById('userList').innerHTML = users.map((user: IUser) => `<tr>
              <td>${user.name}</td>
              <td>${user.cpf}</td>
              <td>${user.phone}</td>
              <td>${user.email}</td>
        </tr>`).join('');
      })
      const btnCadastrar = document.getElementById('cadastrar');
      btnCadastrar.addEventListener("click", this.cadastrar, false);
    });
    return content;
  }
}


export default UserList;