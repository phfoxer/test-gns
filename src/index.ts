import { IRouter } from './interfaces';
import NotFound from './pages/not-found';
import UserForm from './pages/user-form';
import UserList from './pages/user-list';

class AppComponent {

  private routes: IRouter[] = [
    {
      url: '',
      component: new UserList()
    },
    {
      url: 'list',
      component: new UserList()
    }/* ,
  {
    url: 'form',
    component: UserForm()
  } */
  ];

  constructor() {
    app.innerHTML = `<div style="padding:20px">${this.page()}</div>`;
  }

  // render page
  outletRouter = () => {
    const notfound: IRouter = {
      url: '**',
      component: new NotFound()
    }

    const [, url] = window.location.hash.split('/');

    let page = this.routes.filter((_router: IRouter) => _router.url === (url || ''));
    if (!page.length) {
      page = [notfound];
    }
    return page.shift()
  }

  page = (): string => {
    return this.outletRouter().component.render().innerHTML;
  }

}

const app: HTMLDivElement = document.getElementById('app') as HTMLDivElement;
if (app) {
  new AppComponent();
}

