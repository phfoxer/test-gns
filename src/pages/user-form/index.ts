import { IUser } from 'src/interfaces';
import styles from './userform.styles.scss';
// Components
import '../../components/button';
import '../../components/loader';
import { Page } from '..';

class UserForm implements Page {

  public cadastrar = () => {
    window.location.replace('/#/form')
  }

  public btnSend = (isLoading: string, disabled: string) => {
    const btnSend = `<gns-button label="Cadastrar" disabled="${disabled}"  loading="${isLoading}" id="cadastrar"></gns-button>`;
    document.getElementById('btnCadatrar').innerHTML = btnSend;
  }
  public render = () => {
    const content = document.createElement('template');
    content.innerHTML = `
      <style>${styles}</style>
      <div class="controls">
      <div></div>
        <gns-button label="Volar" id="voltar"></gns-button>
        <div id="btnCadatrar"></div>
      </div>
      <form>
      <input type="text"/>
      </form>
    `;

    document.addEventListener('DOMContentLoaded', () => {
      this.btnSend('false','true');
      // Novo usuario
      const btnCadastrar = document.getElementById('cadastrar');

      btnCadastrar.addEventListener(
        "click", (event: any) => {
          this.btnSend('true','false');
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