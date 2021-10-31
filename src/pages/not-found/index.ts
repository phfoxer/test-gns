import { Page } from "..";

class NotFound implements Page {
  render = (): HTMLTemplateElement => {
    const content = document.createElement('template');
    content.innerHTML = `Page not found`;
    return content;
  }
}

export default NotFound;