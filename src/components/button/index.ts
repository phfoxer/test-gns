import styles from './button.styles.scss';
const template = document.createElement('template');

template.innerHTML = `<button></button>`;
class GnsButton extends HTMLElement {
  constructor() {
    super();
    const style = document.createElement('style');
    style.textContent = styles;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const button = document.createElement('button');
    button.textContent = 'Here is some blue text.';
    button.disabled = true;
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(button);
  }

  connectedCallback() {

  }
}
window.customElements.define('gns-button', GnsButton);


