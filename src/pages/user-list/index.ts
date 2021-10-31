import { IUser } from 'src/interfaces';
import { UserService } from '../../services/user.service';
import styles from './userlist.styles.scss';
// Components
import '../../components/button';
import '../../components/loader';
import { Page } from '..';

class UserList implements Page {
  private userService: UserService;
  private columns: string[] = ['Nome completo', 'CPF', 'Telefone', 'Email', ''];

  constructor() {
    this.userService = new UserService();
  }

  public removeItem = () => {
    const excluirList = document.getElementsByClassName('removerUsuario');
    Array.from(excluirList).forEach(function (element) {
      element.addEventListener('click', (event: any) => {
        const id = event.target.id;
        const [cpf] = id.split(':');
        document.getElementById(cpf).remove();
      });
    });
  }


  updateTable = () => {
    this.userService.getUsers().then((users: IUser[]) => {
      document.getElementById('userList').innerHTML = users.map((user: IUser) => `
        <tr id="${user.cpf}">
          <td>${user.name}</td>
          <td>${user.cpf}</td>
          <td>${user.phone}</td>
          <td>${user.email}</td>
          <td>
            <gns-button 
              label="Excluir" 
              class="removerUsuario" 
              id="${user.cpf}:cpf">
            </gns-button>
          </td>
        </tr>`).join('');
      this.removeItem();
    });
  }

  public render = () => {
    const content = document.createElement('template');
    content.innerHTML = `
      <style>${styles}</style>
      <gns-button label="Novo usuário" id="cadastrar"></gns-button>
      <gns-button label="Atualizar" id="atualizar"></gns-button>
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
      // Atualiza tabela de items
      this.updateTable();
      // Novo usuario
      const btnCadastrar = document.getElementById('cadastrar');
      btnCadastrar.addEventListener(
        "click",
        () => {
          window.location.href = '/#/form';
        }
        , false
      );
      // Atualizar tabela
      const btnAtualizar = document.getElementById('atualizar');
      btnAtualizar.addEventListener("click", this.updateTable, false);
    });
    return content;
  }
}


export default UserList;