import { Page } from "..";

class NotFound implements Page {
  onInit = () => { }
  render = (): HTMLTemplateElement => {
    const content = document.createElement('template');
    content.innerHTML = `Page not found`;
    return content;
  }
}

export default NotFound;