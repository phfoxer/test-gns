import styles from './button.styles.scss';
import Component from '../base-component';
import '../loader'




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

    if (this.getAttribute('disabled') === 'true') {
      button.setAttribute('disabled', 'true');
    }
    if (this.getAttribute('loading') === 'true') {
      button.innerHTML = `<gns-loader></gns-loader>`;
    }

    if (!this.getAttribute('loading') || this.getAttribute('loading') === 'false') {
      button.innerHTML = `<div>${this.getAttribute('label')}</div>`;
    }
  }
}


