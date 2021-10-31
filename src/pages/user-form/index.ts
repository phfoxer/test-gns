import { IUser } from 'src/interfaces';
import styles from './userform.styles.scss';
// Components
import '../../components/button';
import '../../components/loader';
import { Page } from '..';

class UserForm implements Page {

  constructor() {
  }

  public cadastrar = () => {
    window.location.replace('/#/form')
  }

  public render = () => {
    const content = document.createElement('template');
    content.innerHTML = `
      <style>${styles}</style>
      <gns-button label="Volar" id="voltar"></gns-button>
      <gns-button label="Cadastrar" id="cadastrar"></gns-button>
      <form>
      <input type="text"/>
      </form>
    `;

    document.addEventListener('DOMContentLoaded', () => {
      // Novo usuario
      const btnCadastrar = document.getElementById('cadastrar');
      btnCadastrar.addEventListener("click", this.cadastrar, false);
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