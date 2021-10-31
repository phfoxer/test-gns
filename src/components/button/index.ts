import styles from './button.styles.scss';
import Component from '../base-component';





@Component({
  selector: 'gns-button',
  template: `<button id="button"></button>`,
  style: styles
})
class GnsButton extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(): void {
    const shadowroot = this.shadowRoot;
    const button = shadowroot.getElementById('button');
    button.innerText = this.getAttribute('label');
  }
}


