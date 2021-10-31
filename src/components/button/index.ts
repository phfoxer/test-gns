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
    const disabled = this.getAttribute('disabled') || 'false';
    const loading = this.getAttribute('loading') || 'false';
    if (disabled === 'true') {
      button.setAttribute('disabled', 'true');
      button.innerHTML = `<gns-loader></gns-loader>`;
    }

    if (loading === 'false') {
      button.innerHTML = `<div>${this.getAttribute('label')}</div>`;
    }
    // event
    button.onclick = () => {
      this.dispatchEvent(new CustomEvent('onpress', {
        detail: { loading: loading === 'true', disabled: disabled === 'true' },
      }));
      eval(this.getAttribute('onpress'))
    }


  }
}


