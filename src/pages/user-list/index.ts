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

  tableRender = () => {
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

  public onInit = () => {
    // Atualiza tabela de items
    this.tableRender();
    // Novo usuario
    const cadastroEvent = document.getElementById('cadastrar');
    cadastroEvent.addEventListener(
      "click",
      () => {
        window.location.href = '/#/form';
      }
      , false
    );
    // Atualizar tabela
    const atualizarEvent = document.getElementById('atualizar');
    atualizarEvent.addEventListener(
      "click",
      this.tableRender,
      false
    );

  }

  public render = () => {
    const content = document.createElement('template');
    content.innerHTML = `
      <style>${styles}</style>
      <div class="controls">
        <gns-button label="Atualizar" id="atualizar"></gns-button>
        <gns-button label="Novo" id="cadastrar"></gns-button>
        <div></div>
      </div>
      <div style="overflow-x:auto;">
        <table>
          <thead>
              <tr>
                ${this.columns.map(colunm => `<th>${colunm}</th>`).join('')}
              </tr>
          </thead>
          <tbody id="userList"></body>
        </table>
      </div>
    `;
    document.addEventListener('DOMContentLoaded', () => this.onInit());
    return content;
  }
}


export default UserList;