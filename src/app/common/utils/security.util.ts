import { Transition } from '@uirouter/angular';
import { AuthService } from '../services/users/auth.service';

const redirectedRoute = '/login';

function useAuth(t: Transition) {
  const auth = t.injector().get(AuthService);
  const state = t.router.stateService;

  return { auth, state };
}

export const LoginRequired = (t: Transition, currentState: any): any => {
  const { auth, state } = useAuth(t);
  if (!auth.authenticated) {
    auth.callbackurl = window.location.href;
    return state.target(redirectedRoute, {}, {});
  }
};

export const Logout = (t: Transition) => {
  const { auth, state } = useAuth(t);

  if (auth.authenticated) {
    auth.rmtoken();
  }
  return state.target(redirectedRoute);
};

export const AlreadyLogged = (t: Transition): any => {
  const { auth, state } = useAuth(t);

  if (auth.authenticated) {
    return state.target('newsfeed');
  }
};
