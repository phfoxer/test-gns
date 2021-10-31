import { IRouter } from './interfaces';
import NotFound from './pages/not-found';
import UserForm from './pages/user-form';
import UserList from './pages/user-list';

class AppComponent {

  private routes: IRouter[] = [
    {
      url: '/',
      component: new UserList()
    },
    {
      url: '/list',
      component: new UserList()
    },
    {
      url: '/form',
      component: new UserForm()
    }
  ];

  constructor() {
    let hash = window.location.hash.slice(1);

    window.addEventListener('hashchange', () => {
      location.reload();
    });

    this.render(hash);
  }

  render = (hash: string) => {
    app.innerHTML = `<div id="test" style="padding:20px">${this.page(hash)}</div>`;
  }

  // render page
  outletRouter = (uri: string) => {
    const notfound: IRouter = {
      url: '**',
      component: new NotFound()
    }
    let page = this.routes.filter((_router: IRouter) => _router.url === (uri || '/'));
    if (!page.length) {
      page = [notfound];
    }
    return page.shift()
  }

  page = (uri: string): string => {
    return this.outletRouter(uri).component.render().innerHTML;
  }

}

const app: HTMLDivElement = document.getElementById('app') as HTMLDivElement;
if (app) {
  new AppComponent();
}

