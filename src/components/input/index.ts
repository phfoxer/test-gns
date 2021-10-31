import styles from './input.styles.scss';
import Component from '../base-component';


@Component({
  selector: 'gns-input',
  template: `<label id="label"></label><input id="input" />`,
  style: styles
})
class GnsButton extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(): void {
    const shadowroot = this.shadowRoot;
    const input = shadowroot.getElementById('input') as HTMLInputElement;
    const label = shadowroot.getElementById('label');
    const unique = this.getAttribute('unique');
    input.setAttribute('value', this.getAttribute('value'));
    input.setAttribute('type', this.getAttribute('type'));
    input.setAttribute('placeholder', this.getAttribute('placeholder'));
    label.innerHTML = this.getAttribute('label');
    if (unique) {
      input.setAttribute('name', unique);
    }
    // event
    input.oninput = () => {
      this.dispatchEvent(new CustomEvent('changed', {
        detail: { value: input.value, name: unique },
      }));
      eval(this.getAttribute('changed'))
    }

  }
}


