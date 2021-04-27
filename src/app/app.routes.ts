import { Ng2StateDeclaration } from '@uirouter/angular';
import { PUBLIC_ROUTES } from './pages/public/public.routes';
import { USER_ROUTES } from './pages/users/users.routes';
import { RootModule } from '@uirouter/angular';

export const APP_ROUTES: RootModule = {
  states: ([] as Ng2StateDeclaration[]).concat(PUBLIC_ROUTES, USER_ROUTES),
  otherwise: '/',
  config: (router): any => {
    router.urlService.config.strictMode(false);
  },
};
