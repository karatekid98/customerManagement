
import { User } from '../user';

export class AuthGuardService {

    public user: User = {
      username: '',
      password: ''
    };

    constructor() {
      this.user.username = 'admin';
      this.user.password = 'admin';
    }

    returnUserAndPass(): User {
      return this.user;
    }
}
