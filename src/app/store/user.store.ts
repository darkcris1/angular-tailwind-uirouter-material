import { writable } from './store';

interface User {
  name?: string;
  last_name?: string;
}
type user = null | undefined | User;

const user = writable<User>({ name: 'I am groot' });

export { user };
