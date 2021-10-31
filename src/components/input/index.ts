import styles from './input.styles.scss';
import Component from '../base-component';


@Component({
  selector: 'gns-input',
  template: `<input id="input" />`,
  style: styles
})
class GnsButton extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(): void {
    const shadowroot = this.shadowRoot;
    const input = shadowroot.getElementById('input');
    input.setAttribute('value', this.getAttribute('value'));
    input.setAttribute('type', this.getAttribute('type'));
    input.setAttribute('placeholder', this.getAttribute('placeholder'));
  }
}


