import { HeaderComponent } from './../../public/_components/header/header.component';
import { FavoriteIdComponent } from './favorite-id/favorite-id.component';
import { WithHeader } from '$common/utils/layout.util';
import { FavoriteComponent } from './favorite/favorite.component';
import { NewsfeedComponent } from './newsfeed.component';
import { path, protectedRoute } from '$common/utils/path';
import { StatesModule } from '@uirouter/angular';
import { LoginRequired } from '$common/utils/security.util';

const routes = protectedRoute(
  LoginRequired,
  path('/newsfeed', WithHeader(NewsfeedComponent, HeaderComponent), {
    children: [
      path('/favorites', FavoriteComponent, {
        children: [path('/:id', FavoriteIdComponent)],
      }),
    ],
  })
);

export const NEWSFEED_ROUTES: StatesModule = {
  states: routes,
};
