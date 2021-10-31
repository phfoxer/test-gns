import { IUser } from 'src/interfaces';
import styles from './userform.styles.scss';
// Components
import '../../components/button';
import '../../components/input';
import { Page } from '..';

class UserForm implements Page {
  private user: IUser = {
    name: 'Paulo',
    cpf: '895',
    email: 'sss@ddd',
    phone: '123'
  };
  public cadastrar = () => {
    window.location.replace('/#/form')
  }

  public btnSend = (isLoading: string, disabled: string) => {
    const btnSend = `<gns-button label="Cadastrar" disabled="${disabled}"  loading="${isLoading}" id="cadastrar"></gns-button>`;
    document.getElementById('btnCadatrar').innerHTML = btnSend;
  }


  public input = (id: string, value: string, type: string, placeholder: string) => {
    const input = `
      <gns-input 
        id="${id}" 
        value="${value}" 
        type="${type}"
        placeholder="${placeholder}"
      /></gns-input>`;
    document.getElementById(id).innerHTML = input;
  }

  public getForm(user:IUser) {
    this.input('nomecompleto', user.name, 'text', 'Nome completo');
    this.input('cpf', user.cpf, 'text', 'CPF');
    this.input('phone', user.phone, 'text', 'Telefone');
    this.input('email', user.email, 'email', 'E-mail');
  }

  public render = () => {
    const content = document.createElement('template');
    content.innerHTML = `
      <style>${styles}</style>
      <div class="controls">
        <gns-button label="Volar" id="voltar"></gns-button>
        <div id="btnCadatrar"></div>
        <div></div>
      </div>
      <div class="form">
        <div class="form-group">
          <div id="nomecompleto"/></div>
          <div id="cpf"/></div>
        </div>
        <div class="form-group">
          <div id="phone"/></div>
          <div id="email"/></div>
        </div>
      </div>

    `;

    document.addEventListener('DOMContentLoaded', () => {
      this.btnSend('false', 'true');
      // form
      this.getForm(this.user);
      // Novo usuario
      const btnCadastrar = document.getElementById('cadastrar');
      btnCadastrar.addEventListener(
        "click", (event: any) => {
          this.btnSend('true', 'false');
        },
        false
      );
      // Voltar
      const btnVoltar = document.getElementById('voltar');
      btnVoltar.addEventListener("click", () => {
        window.location.href = '/#/list';


      }, false);

    });
    return content;
  }
}


export default UserForm;