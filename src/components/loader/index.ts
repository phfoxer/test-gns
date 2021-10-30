import Component from '../base-component';
import styles from './loader.styles.scss';

@Component({
  selector: 'gns-loader',
  template: `<div class="loader"></div>`,
  style: styles
})
class MyName extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', () => {
      alert(2)
    });
  }
}
