interface CustomElementConfig {
  selector: string;
  template: string;
  style?: string;
}
const Component = (config: CustomElementConfig) => (cls: any) => {
  if (!config.template) {
    throw new Error('You need to pass a template');
  }
  const template = document.createElement('template');
  if (config.style) {
    config.template = `<style>${config.style}</style> ${config.template}`;
  }
  template.innerHTML = config.template;

  const connectedCallback = cls.prototype.connectedCallback || function () { };
  cls.prototype.connectedCallback = function () {
    const clone = document.importNode(template.content, true);
    this.attachShadow({ mode: 'open' }).appendChild(clone);

    connectedCallback.call(this);
  };

  window.customElements.define(config.selector, cls);
};

export default Component;