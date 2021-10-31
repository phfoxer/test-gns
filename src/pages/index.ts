export abstract class Page {
  abstract onInit(): void;
  abstract render(): HTMLTemplateElement;
}