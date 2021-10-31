
import { Page } from "src/pages";
export interface IRouter {
  url: string;
  component: Page;
}

export interface IUser {
  name: string;
  cpf: string;
  phone: string;
  email: string;
}
