import { ProfileComponent } from './profile/profile.component';
import { LoginRequired } from '$common/utils/security.util';
import { WithHeader } from '$common/utils/layout.util';
import { path, protectedRoute, route } from 'src/app/common/utils/path';

import { HeaderComponent } from '../public/_components/header/header.component';

export const USER_ROUTES = protectedRoute(
  LoginRequired,
  path('/newsfeed.**', () =>
    import('./newsfeed/newsfeed.module').then((m) => m.NewsfeedModule)
  ),
  path('/profile', WithHeader(ProfileComponent, HeaderComponent))
);
console.log(USER_ROUTES);
