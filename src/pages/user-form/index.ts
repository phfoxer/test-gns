import { IUser } from 'src/interfaces';
import styles from './userform.styles.scss';
// Components
import '../../components/button';
import '../../components/input';
import { Page } from '..';
import { UserService } from '../../services/user.service';

interface IInput {
  id: string;
  unique: string;
  value: string;
  type: string;
  label: string;
  placeholder: string;
}

class UserForm implements Page {
  private userService: UserService;
  private user: IUser = {
    name: '',
    cpf: '',
    email: '',
    phone: ''
  };

  constructor() {
    this.userService = new UserService();
  }

  public formValidationEvent = () => {
    const user = Object.values(this.user);
    const count = user.filter(r => r).length;

    if (count === 4) {
      this.buttonSendRender('false', 'false');
      this.onSubmitEvent();
    }
    if (count < 4) {
      this.buttonSendRender('false', 'true');
    }
  }

  public onSubmitEvent = () => {
    const btnCadastrar = document.getElementById('cadastrar');
    btnCadastrar.addEventListener("onpress", ({ detail: { disabled, loading } }: any) => {
      if (!disabled && !loading) {
        this.buttonSendRender('true', 'false');
        this.userService.addUser(this.user).then(() => {
          this.user = {
            name: '',
            cpf: '',
            email: '',
            phone: ''
          };
          this.formRender(this.user);
        });
      }
    },
      false
    );
  }

  public inputChangeEvent = () => {
    const inputList = document.getElementsByClassName('form-input');
    Array.from(inputList).forEach((element: Element) => {
      element.addEventListener('changed', (e: any) => {
        const data = e.detail as { value: string; name: string };
        const user: any = {} as any;
        user[data.name] = data.value;
        this.user = { ...this.user, ...user };
        this.formValidationEvent();
      });
    });
  }

  public buttonSendRender = (isLoading: string, disabled: string) => {
    const btnSend = `
    <gns-button 
      label="Cadastrar" 
      disabled="${disabled}"  
      loading="${isLoading}" 
      id="cadastrar">
    </gns-button>`;
    document.getElementById('btnCadatrar').innerHTML = btnSend;
  }

  public inputRender = (data: IInput) => {
    const input = `
      <gns-input     
        label="${data.label}"
        unique="${data.unique}"  
        value="${data.value}" 
        type="${data.type}"
        placeholder="${data.placeholder}"
        class="form-input" 
      /></gns-input>`;
    document.getElementById(data.id).innerHTML = input;
  }

  public formRender(user: IUser) {
    this.inputRender({
      id: 'nomecompletoinput',
      unique: 'name',
      value: user.name,
      type: 'text',
      label: 'Nome completo',
      placeholder: 'Nome e sombrenome'
    });
    this.inputRender({
      id: 'cpfinput',
      unique: 'cpf',
      value: user.cpf,
      type: 'text',
      label: 'CPF',
      placeholder: 'Informe seu CPF'
    });
    this.inputRender({
      id: 'phoneinput',
      unique: 'phone',
      value: user.phone,
      type: 'text',
      label: 'Telefone',
      placeholder: 'Telefone com ddd'
    });
    this.inputRender({
      id: 'emailinput',
      unique: 'email',
      value: user.phone,
      type: 'email',
      label: 'E-mail',
      placeholder: 'Informe um e-mail válido'
    });
    // Renderiza botão de envio
    this.buttonSendRender('false', 'true');
    // Adiciona eventos dos inputs
    this.inputChangeEvent();
  }

  public onInit = () => {
    // Render do formulário
    this.formRender(this.user);
    // Voltar
    const btnVoltar = document.getElementById('voltar');
    btnVoltar.addEventListener(
      "click",
      () => {
        window.location.href = '/#/list';
      },
      false
    );
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
          <div class="form-control" id="nomecompletoinput"/></div>
          <div class="form-control" id="cpfinput"/></div>
        </div>
        <div class="form-group">
          <div class="form-control" id="phoneinput"/></div>
          <div class="form-control" id="emailinput"/></div>
        </div>
      </div>
    `;
    // DOM está pronto
    document.addEventListener('DOMContentLoaded', () => this.onInit());
    return content;
  }
}


export default UserForm;